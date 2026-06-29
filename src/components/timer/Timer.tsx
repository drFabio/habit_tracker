import { useTimer } from './hooks/useTimer'
import { TimerProps } from './types'

export function Timer(props: TimerProps) {

    const { displayTime, timerState, pause, start, stop } = useTimer(props)

    return (
        <div>
            {timerState}
            <div>
                <span>{displayTime}</span>
            </div>

            <div>

                <button disabled={timerState === 'STARTED'} type="button" onClick={start}>{timerState === 'PAUSED' ? 'Resume' : 'Start'}</button>
                <button disabled={timerState !== 'STARTED'} type="button" onClick={pause}>Pause</button>
                <button disabled={timerState === 'STOPPED'} type="button" onClick={stop}>Stop</button>
            </div>
        </div>
    )
}

