export const timerMode = ['COUNT_UP', 'COUNT_DOWN'] as const

export type TimerMode = typeof timerMode[number]

type CommonProps = {
    autoStart?: boolean
}
type TimerUp = {
    mode?: 'COUNT_UP'
    amountInSeconds?: never
}

type TimerDown = {
    mode: 'COUNT_DOWN'
    amountInSeconds: number
}

export type TimerProps = CommonProps & (TimerUp | TimerDown)