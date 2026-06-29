export class TimerHandler {
    private _startTime: number = 0
    constructor(private readonly _amountInMs?: number | never, private readonly _tickFrequencyInMs?: 500) { }

    start() {
        this._startTime = new Date().getTime()
    }
    stop() {
        this._startTime = 0
    }
    pause() {
        throw new Error('Not implemented')
    }


    get ellapsedTime() {
        const now = new Date().getTime()
        return now - this._startTime
    }

    get remainingTime() {
        if (!this._amountInMs) {
            return 0
        }
        return this._amountInMs - this.ellapsedTime
    }



}