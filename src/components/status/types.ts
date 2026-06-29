import type { ReactNode } from 'react'

export const statusVariant = ['ACTIVE', 'IDLE', 'SUCCESSFUL', 'UNSUCCESSFUL', 'DISABLED'] as const

export type StatusVariant = typeof statusVariant[number]

export type StatusProps = {
    variant?: StatusVariant
    size?: number
    color?: string
    children?: ReactNode
}

export const variantColors: Record<StatusVariant, string> = {
    ACTIVE: '#3b82f6',
    IDLE: '#f59e0b',
    SUCCESSFUL: '#22c55e',
    UNSUCCESSFUL: '#ef4444',
    DISABLED: '#a3a3a3',
}