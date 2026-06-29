'use client'
import { useEffect, useRef, useState } from 'react'
import { TimerProps } from '../types'
import { TimerHandler } from '../utils/TimerHandler'
import { formatTime } from '../utils/formatTime'


export function useTimer({ mode, amountInSeconds }: TimerProps) {
    const [dispalyTime, setDisplayTime] = useState<string>()
    const intervalRef = useRef<number>(0)
    const timerRef = useRef<TimerHandler>(null)


    useEffect(() => {
        let handler: TimerHandler

        if (mode === 'COUNT_DOWN') {
            handler = new TimerHandler(amountInSeconds)
        } else {
            handler = new TimerHandler()
        }
        timerRef.current = handler
        handler.start()
        const interval = window.setInterval(() => {
            if (!timerRef.current) {
                throw new Error('Timer nto')
            }
            if (mode === 'COUNT_DOWN') {
                setDisplayTime(formatTime(timerRef.current?.remainingTime / 1_000))

            } else {
                setDisplayTime(formatTime(timerRef.current?.ellapsedTime / 1_000))
            }
        }, 500)
        intervalRef.current = interval

        return () => clearInterval(interval)
    }, [intervalRef, timerRef, mode, amountInSeconds])

    return { dispalyTime }
}

