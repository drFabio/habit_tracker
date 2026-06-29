import { useTimer } from './hooks/useTimer'
import { TimerProps } from './types'

export function Timer(props: TimerProps) {
    const amountInSeconds = 'amountInSeconds' in props ? props.amountInSeconds : 0

    const { dispalyTime } = useTimer(props)

    return <h1>{dispalyTime}</h1>
}

