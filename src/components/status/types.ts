import type { ReactNode } from 'react'

export const statusVariant = ['ACTIVE', 'IDLE', 'SUCCESSFUL', 'UNSUCCESSFUL', 'DISABLED'] as const

export type StatusVariant = typeof statusVariant[number]

export type StatusProps = {
    variant?: StatusVariant
    size?: number
    color?: string
    children?: ReactNode
}
