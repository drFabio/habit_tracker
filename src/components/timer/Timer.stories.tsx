import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Timer } from './Timer';

const meta = {
  component: Timer,
  args: {
    mode: 'COUNT_UP',
    autoStart: false
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['COUNT_UP', 'COUNT_DOWN'],
    },
    amountInSeconds: {
      control: { type: 'number', min: 1 },
      if: { arg: 'mode', eq: 'COUNT_DOWN' },
    },
    autoStart: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Timer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Countdown: Story = {
  args: {
    mode: 'COUNT_DOWN',
    amountInSeconds: 30,
  },
};