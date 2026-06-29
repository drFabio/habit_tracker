export function getLuminance(r: number, g: number, b: number) {
    const [rl, gl, bl] = [r, g, b].map(v => {
        const c = v / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl
}
