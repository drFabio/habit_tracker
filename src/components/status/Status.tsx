'use client'
import { useId } from 'react'
import { variantColors, type StatusProps } from './types'
import { getContrastColor } from './utils/getContrastColor'

export function Status({ variant = 'IDLE', size = 100, children, color }: StatusProps) {
    const id = useId()
    const cx = size / 2
    const cy = size / 2
    const strokeWidth = size * 0.1
    const radius = (size / 2) - (strokeWidth / 2)
    const fontSize = Math.max(size * 0.09, 7)

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
