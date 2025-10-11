import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    // Log the subscription for now
    console.log('Newsletter subscription:', { email, timestamp: new Date().toISOString() })

    // Google Sheets integration
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (GOOGLE_SHEETS_URL) {
      try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            timestamp: new Date().toISOString(),
            source: 'website_newsletter'
          }),
        })

        if (!response.ok) {
          console.error('Google Sheets webhook failed:', response.statusText)
        } else {
          console.log('Successfully added to Google Sheets')
        }
      } catch (sheetError) {
        console.error('Google Sheets integration error:', sheetError)
        // Don't fail the request if Google Sheets fails
      }
    } else {
      console.log('Google Sheets webhook URL not configured')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}
