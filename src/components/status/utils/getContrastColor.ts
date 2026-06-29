import { getLuminance } from "./getLuminance"
import { hexToRgb } from "./hexToRgb"

export function getContrastColor(hex: string) {
    const rgb = hexToRgb(hex)
    if (!rgb) return '#000000'
    return getLuminance(rgb.r, rgb.g, rgb.b) > 0.4 ? '#000000' : '#ffffff'
}