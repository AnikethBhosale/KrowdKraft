import { render, screen } from '@testing-library/react'
import { Badge } from '../badge'

describe('Badge', () => {
  it('renders with correct text', () => {
    render(<Badge>Sample Badge</Badge>)
    expect(screen.getByText('Sample Badge')).toBeInTheDocument()
  })

  it('applies default styles', () => {
    render(<Badge>Badge</Badge>)
    const badge = screen.getByText('Badge')
    expect(badge).toHaveClass('inline-flex') // Assuming Tailwind classes; adjust based on actual Badge component
  })
})