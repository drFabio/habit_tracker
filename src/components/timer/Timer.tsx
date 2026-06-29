import { useTimer } from './hooks/useTimer'
import { TimerProps } from './types'

export function Timer(props: TimerProps) {

    const { dispalyTime } = useTimer(props)

    return <>{dispalyTime}</>
}

