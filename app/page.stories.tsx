import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'
import Home from './page'

const meta = {
  component: Home,
  tags: ['ai-generated'],
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const heading = canvas.getByRole('heading', { name: /to get started/i })
    const styles = getComputedStyle(heading)
    expect(styles.fontWeight).toBe('600')
  },
}
