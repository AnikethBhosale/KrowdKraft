/**
 * Email sending API route for event proposals and quote requests
 * Handles form submissions and sends formatted emails via Gmail SMTP
 */
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { confirmationHtml, confirmationSubject } from '@/lib/email-templates'

export async function POST(request: NextRequest) {
  let body: any
  let type: string = 'unknown'
  let data: any = null

  try {
    body = await request.json()
    type = body.type || 'unknown'
    data = body.data

    console.log(`📧 Form submission received - Type: ${type}`)
    console.log('📝 Form data:', data)

    // Email configuration
  const emailUser = process.env.EMAIL_USER || 'krowdkraft.official@gmail.com'
  const emailPass = process.env.EMAIL_PASS
  const emailSenderName = process.env.EMAIL_SENDER_NAME || 'KrowdKraft'
  const emailBcc = process.env.EMAIL_BCC

    if (!emailPass) {
      console.log('⚠️ EMAIL_PASS not configured in environment variables')
      console.log('📝 Form data logged for manual processing:', { type, data })
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully! We will contact you soon.',
        note: 'Email configuration pending - form data has been logged for manual processing.'
      })
    }

    console.log('✅ Email credentials configured, attempting to send...')

    // Create nodemailer transporter with simplified, reliable configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPass
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 15000
    })

    // Verify connection
    console.log('🔍 Verifying SMTP connection...')
    await transporter.verify()
    console.log('✅ SMTP connection verified successfully')

    // Prepare email content
    let subject = ''
    let htmlContent = ''
    let textContent = ''

    if (type === 'event-proposal') {
      subject = `🎉 New Event Proposal: ${data.eventTitle}`
      textContent = `
New Event Proposal Submitted

Name: ${data.name}
Email: ${data.email}
Mobile: ${data.mobile}
Event Title: ${data.eventTitle}
Event Type: ${data.eventType}
Tentative Dates: ${data.tentativeDates}
Target Audience: ${data.targetAudience}
Description: ${data.description}
      `.trim()

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #8b5cf6; margin-bottom: 20px;">🎉 New Event Proposal</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${data.email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Mobile:</td><td style="padding: 8px 0;">${data.mobile}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Event Title:</td><td style="padding: 8px 0;">${data.eventTitle}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Event Type:</td><td style="padding: 8px 0;">${data.eventType}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Tentative Dates:</td><td style="padding: 8px 0;">${data.tentativeDates}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Target Audience:</td><td style="padding: 8px 0;">${data.targetAudience}</td></tr>
            </table>
            <div style="margin-top: 20px;">
              <strong>Description:</strong>
              <p style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px;">${data.description}</p>
            </div>
          </div>
        </div>
      `
    } else if (type === 'quote-request') {
      subject = `💼 New Quote Request: ${data.service}`
      textContent = `
New Quote Request Submitted

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Service: ${data.service}
Budget Range: ${data.budget || 'Not specified'}
Timeline: ${data.timeline || 'Not specified'}
Project Details: ${data.message}
      `.trim()

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #8b5cf6; margin-bottom: 20px;">💼 New Quote Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${data.email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td style="padding: 8px 0;">${data.company || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${data.phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td style="padding: 8px 0;">${data.service}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Budget Range:</td><td style="padding: 8px 0;">${data.budget || 'Not specified'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Timeline:</td><td style="padding: 8px 0;">${data.timeline || 'Not specified'}</td></tr>
            </table>
            <div style="margin-top: 20px;">
              <strong>Project Details:</strong>
              <p style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px;">${data.message}</p>
            </div>
          </div>
        </div>
      `
    }

    // Email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: `${emailSenderName} <${emailUser}>`,
      to: 'krowdkraft.official@gmail.com',
      subject: subject,
      text: textContent,
      html: htmlContent,
      replyTo: data.email,
      ...(emailBcc ? { bcc: emailBcc } : {}),
    }

    console.log('📤 Sending email...')
    const result = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully!')
    console.log('📧 Message ID:', result.messageId)

    // Send confirmation email to user when possible
    try {
      if (data?.email) {
        const confirmSubject = confirmationSubject(
          type === 'event-proposal' ? 'event-proposal' : 'quote-request'
        )
        const confirmHtml = confirmationHtml({
          type: type === 'event-proposal' ? 'event-proposal' : 'quote-request',
          name: data?.name,
          details:
            type === 'event-proposal'
              ? [
                  { label: 'Event Title', value: data.eventTitle },
                  { label: 'Event Type', value: data.eventType },
                  { label: 'Tentative Dates', value: data.tentativeDates },
                ]
              : [
                  { label: 'Service', value: data.service },
                  { label: 'Budget', value: data.budget },
                  { label: 'Timeline', value: data.timeline },
                ],
        })

        await transporter.sendMail({
          from: `${emailSenderName} <${emailUser}>`,
          to: data.email,
          subject: confirmSubject,
          html: confirmHtml,
          replyTo: emailUser,
        })
        console.log('✅ Confirmation email sent to user:', data.email)
      } else {
        console.log('ℹ️ Skipping confirmation email: no user email present')
      }
    } catch (confirmErr) {
      console.warn('⚠️ Failed to send confirmation email to user:', confirmErr)
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully! We will get back to you soon.',
      messageId: result.messageId,
    })

  } catch (error) {
    console.error('❌ Email sending failed:', error)
    
    // Log the form data for manual processing
    console.log('📝 Logging form data for manual processing:', { type: type || 'unknown', data: data || 'unavailable' })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully! We will contact you soon.',
      note: 'Your request has been received and our team will reach out to you directly.',
      error: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
    })
  }
}