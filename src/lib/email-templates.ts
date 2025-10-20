// Simple HTML email templates for user confirmations
// Keep styles inline for better email client compatibility

type SubmissionType = 'event-proposal' | 'quote-request' | 'partnership'

function baseWrapper(content: string) {
  return `
  <div style="font-family: Arial, sans-serif; background-color: #f6f7fb; padding: 24px;">
    <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); overflow: hidden;">
      <div style="background: linear-gradient(90deg, #8b5cf6, #6d28d9); height: 6px;"></div>
      <div style="padding: 28px;">
        ${content}
      </div>
      <div style="padding: 16px 28px; color: #6b7280; font-size: 12px; border-top: 1px solid #f1f5f9;">
        © ${new Date().getFullYear()} KrowdKraft — This is an automated message, please reply if you have any questions.
      </div>
    </div>
  </div>
  `
}

export function confirmationSubject(type: SubmissionType) {
  switch (type) {
    case 'event-proposal':
      return 'Thanks for your event proposal — KrowdKraft'
    case 'quote-request':
      return 'Thanks for your request — KrowdKraft'
    case 'partnership':
      return 'Thanks for your partnership request — KrowdKraft'
    default:
      return 'Thanks for reaching out — KrowdKraft'
  }
}

export function confirmationHtml(options: {
  type: SubmissionType
  name?: string
  details?: Array<{ label: string; value?: string }>
}) {
  const { type, name, details = [] } = options

  const title =
    type === 'event-proposal'
      ? 'Event proposal received'
      : type === 'partnership'
      ? 'Partnership request received'
      : 'Request received'

  const intro = `Hi${name ? ` ${escapeHtml(name)}` : ''},`;

  const detailRows = details
    .filter((d) => d.value && String(d.value).trim().length > 0)
    .slice(0, 8) // keep it short
    .map(
      (d) => `
        <tr>
          <td style="padding: 6px 0; color: #6b7280;">${escapeHtml(d.label)}:</td>
          <td style="padding: 6px 0; color: #111827; font-weight: 600;">${escapeHtml(String(d.value))}</td>
        </tr>
      `
    )
    .join('')

  const body = `
    <h2 style="margin: 0 0 12px; color: #111827;">${title}</h2>
    <p style="margin: 0 0 12px; color: #374151;">${intro}</p>
    <p style="margin: 0 0 16px; color: #374151;">Thanks for your submission. Our team will review the details and get back to you shortly.</p>
    ${detailRows
      ? `<table style="width: 100%; margin: 12px 0 16px; border-collapse: collapse;">${detailRows}</table>`
      : ''}
    <p style="margin: 16px 0 0; color: #6b7280; font-size: 13px;">If any of the above details need correction, just reply to this email with the updates.</p>
  `

  return baseWrapper(body)
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
