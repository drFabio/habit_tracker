import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Status } from './Status';

const meta = {
    component: Status,
    args: {
        variant: 'ACTIVE',
        size: 100,
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['ACTIVE', 'IDLE', 'SUCCESSFUL', 'UNSUCCESSFUL', 'DISABLED'],
        },
        size: {
            control: { type: 'number', min: 24, max: 300 },
        },
        color: {
            control: 'color',
        },
    },
} satisfies Meta<typeof Status>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        variant: 'ACTIVE',
    },
};

export const Idle: Story = {
    args: {
        variant: 'IDLE',
    },
};

export const Successful: Story = {
    args: {
        variant: 'SUCCESSFUL',
    },
};

export const Unsuccessful: Story = {
    args: {
        variant: 'UNSUCCESSFUL',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'DISABLED',
    },
};

export const CustomColor: Story = {
    args: {
        variant: 'ACTIVE',
        color: '#8b5cf6',
    },
};

export const Large: Story = {
    args: {
        variant: 'SUCCESSFUL',
        size: 200,
    },
};

export const WithChildren: Story = {
    args: {
        variant: 'ACTIVE',
        children: <circle r={12} fill="#fff" />,
    },
};
