import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'
import { Header } from './Header'

const meta = {
  component: Header,
  tags: ['ai-generated'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: { name: 'Jane Doe' },
  },
}

export const LoggedOut: Story = {
  play: async ({ canvas }) => {
    expect(canvas.getByRole('button', { name: /log in/i })).toBeVisible()
    expect(canvas.getByRole('button', { name: /sign up/i })).toBeVisible()
  },
}
