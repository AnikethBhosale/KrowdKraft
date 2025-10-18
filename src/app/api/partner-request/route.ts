import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { confirmationHtml, confirmationSubject } from '@/lib/email-templates'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { data } = body

    console.log('Partner request submission:', data)
    console.log('Environment variables check:')
    console.log('- GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL:', process.env.GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL ? 'SET' : 'NOT SET')
    console.log('- GOOGLE_SHEETS_WEBHOOK_URL:', process.env.GOOGLE_SHEETS_WEBHOOK_URL ? 'SET' : 'NOT SET')

  const webhookUrl = process.env.GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL
  const emailUser = process.env.EMAIL_USER || 'krowdkraft.official@gmail.com'
  const emailPass = process.env.EMAIL_PASS
  const emailSenderName = process.env.EMAIL_SENDER_NAME || 'KrowdKraft'
  const emailBcc = process.env.EMAIL_BCC

    if (!webhookUrl) {
      console.log('GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL not configured, logging partnership request:', data)
      // Even if webhook isn't configured, still try to send confirmation email if SMTP is configured
      if (emailPass && data?.email) {
        try {
          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: { user: emailUser, pass: emailPass },
            tls: { rejectUnauthorized: false },
          })
          await transporter.verify()
          await transporter.sendMail({
            from: `${emailSenderName} <${emailUser}>`,
            to: data.email,
            subject: confirmationSubject('partnership'),
            html: confirmationHtml({
              type: 'partnership',
              name: data?.name || data?.organizationName,
              details: [
                { label: 'Organization', value: data?.organizationName },
                { label: 'Mobile', value: data?.mobile },
                { label: 'Email', value: data?.email },
              ],
            }),
            replyTo: emailUser,
            ...(emailBcc ? { bcc: emailBcc } : {}),
          })
          console.log('✅ Partnership confirmation email sent to user:', data.email)
        } catch (e) {
          console.warn('⚠️ Could not send partnership confirmation email:', e)
        }
      }
      return NextResponse.json({
        success: true,
        message: 'Partnership request submitted successfully! (Google Sheets webhook not configured)'
      })
    }

    try {
      const timestamp = new Date().toISOString()
      const submissionData = {
        type: 'partnership',
        timestamp,
        data,
        source: 'website_partnership_form'
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      })

      const responseText = await response.text()
      console.log('Google Sheets response:', responseText)

      if (!response.ok) {
        console.error('Failed to send partnership data to Google Sheets:', {
          status: response.status,
          statusText: response.statusText,
          response: responseText
        })
        return NextResponse.json({ 
          success: false, 
          message: 'Failed to submit partnership request. Please try again.' 
        }, { status: 500 })
      }

      console.log('Successfully added partnership request to Google Sheets:', responseText)

      // After successful webhook, attempt to send confirmation email to the user
      try {
        if (emailPass && data?.email) {
          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: { user: emailUser, pass: emailPass },
            tls: { rejectUnauthorized: false },
          })
          await transporter.verify()
          await transporter.sendMail({
            from: `${emailSenderName} <${emailUser}>`,
            to: data.email,
            subject: confirmationSubject('partnership'),
            html: confirmationHtml({
              type: 'partnership',
              name: data?.name || data?.organizationName,
              details: [
                { label: 'Organization', value: data?.organizationName },
                { label: 'Mobile', value: data?.mobile },
                { label: 'Email', value: data?.email },
              ],
            }),
            replyTo: emailUser,
            ...(emailBcc ? { bcc: emailBcc } : {}),
          })
          console.log('✅ Partnership confirmation email sent to user:', data.email)
        } else {
          console.log('ℹ️ Skipping partnership confirmation email: SMTP not configured or no user email')
        }
      } catch (emailErr) {
        console.warn('⚠️ Failed to send partnership confirmation email:', emailErr)
      }

      return NextResponse.json({
        success: true,
        message: 'Partnership request submitted successfully!'
      })
    } catch (webhookError) {
      console.error('Google Sheets webhook error:', webhookError)
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to submit partnership request. Please try again.' 
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Partnership request API error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
