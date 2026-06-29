'use client'
import { useEffect, useRef, useState } from 'react'
import { TimerProps, TimerState } from '../types'
import { TimerHandler } from '../utils/TimerHandler'
import { formatTime } from '../utils/formatTime'


export type UseTimerProps = TimerProps & {
    onStop?: () => void
}
export function useTimer({ mode, amountInSeconds, onStop, autoStart = true }: UseTimerProps) {
    const [displayTime, setDisplayTime] = useState<string>()
    const [timerState, setTimerState] = useState<TimerState | undefined>('STOPPED')
    const intervalRef = useRef<number>(0)
    const timerRef = useRef<TimerHandler>(null)

    const pause = () => {
        clearInterval(intervalRef.current)
        timerRef.current?.pause()
        setTimerState(timerRef.current?.state)
    }
    const start = () => {
        timerRef.current?.start()
        setTimerState(timerRef.current?.state)

        const interval = window.setInterval(() => {
            if (!timerRef.current) {
                throw new Error('Timer nto')
            }
            if (mode === 'COUNT_DOWN') {
                const remaining = timerRef.current?.remainingTime
                if (remaining === 0) {
                    stop()
                }
                setDisplayTime(formatTime(remaining / 1_000))

            } else {
                setDisplayTime(formatTime(timerRef.current?.ellapsedTime / 1_000))
            }
        }, 500)
        intervalRef.current = interval
    }
    const stop = () => {
        clearInterval(intervalRef.current)
        onStop?.()
        timerRef.current?.stop()
        setTimerState(timerRef.current?.state)


    }

    useEffect(() => {
        let handler: TimerHandler

        if (mode === 'COUNT_DOWN') {
            handler = new TimerHandler(amountInSeconds * 1_000)
        } else {
            handler = new TimerHandler()
        }
        timerRef.current = handler
        if (autoStart) {
            start()
        }


        return () => clearInterval(intervalRef.current)
    }, [intervalRef, timerRef, mode, amountInSeconds, autoStart])

    return { displayTime, timerState, pause, start, stop }
}

