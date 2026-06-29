import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'
import { Button } from './Button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { label: 'Order now', primary: true },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /order now/i })
    expect(button).toBeVisible()
    expect(getComputedStyle(button).backgroundColor).toBe('rgb(85, 90, 185)')
  },
}

export const Secondary: Story = {
  args: { label: 'Cancel' },
}

export const Large: Story = {
  args: { label: 'Checkout', size: 'large' },
}

export const Small: Story = {
  args: { label: 'Cancel', size: 'small' },
}
