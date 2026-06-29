import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Timer } from './Timer';

const meta = {
  component: Timer,
  args: {
    mode: 'COUNT_UP',
  }
} satisfies Meta<typeof Timer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};