'use client'
import { useId } from 'react'
import type { StatusProps, StatusVariant } from './types'

const variantColors: Record<StatusVariant, string> = {
    ACTIVE: '#3b82f6',
    IDLE: '#f59e0b',
    SUCCESSFUL: '#22c55e',
    UNSUCCESSFUL: '#ef4444',
    DISABLED: '#a3a3a3',
}

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (!result) return null
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    }
}

function getLuminance(r: number, g: number, b: number) {
    const [rl, gl, bl] = [r, g, b].map(v => {
        const c = v / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl
}

function getContrastColor(hex: string) {
    const rgb = hexToRgb(hex)
    if (!rgb) return '#000000'
    return getLuminance(rgb.r, rgb.g, rgb.b) > 0.5 ? '#000000' : '#ffffff'
}

export function Status({ variant = 'IDLE', size = 100, children, color }: StatusProps) {
    const id = useId()
    const cx = size / 2
    const cy = size / 2
    const radius = (size / 2) * 0.92
    const strokeWidth = Math.max(size * 0.05, 3)
    const fontSize = Math.max(size * 0.09, 9)

    const fillColor = color || variantColors[variant]
    const contrastColor = getContrastColor(fillColor)
    const disabled = variant === 'DISABLED'
    const opacity = disabled ? 0.5 : 1

    const pathId = `status-arc-${id}`
    const pathD = `M ${cx - radius},${cy} A ${radius},${radius} 0 1,1 ${cx + radius},${cy}`

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img">
            <defs>
                <path id={pathId} d={pathD} />
            </defs>

            <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={fillColor}
                strokeWidth={strokeWidth}
                opacity={opacity}
            />

            <text
                fontSize={fontSize}
                fill={contrastColor}
                opacity={opacity}
                dominantBaseline="middle"
                fontWeight={600}
            >
                <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
                    {variant}
                </textPath>
            </text>

            {children ? (
                <g transform={`translate(${cx}, ${cy})`}>
                    {children}
                </g>
            ) : (
                <circle
                    cx={cx}
                    cy={cy}
                    r={radius * 0.3}
                    fill={fillColor}
                    opacity={opacity}
                />
            )}
        </svg>
    )
}
