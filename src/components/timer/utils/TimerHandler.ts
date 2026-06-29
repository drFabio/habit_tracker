export class TimerHandler {
    private _startTime: number = 0
    private _registeredEllapsedTime: number = 0
    constructor(private readonly _amountInMs?: number | never, private readonly _tickFrequencyInMs?: 500) { }

    start() {
        this._startTime = new Date().getTime()
    }
    stop() {
        this._startTime = 0
        this._registeredEllapsedTime = 0
    }
    pause() {
        this._registeredEllapsedTime = this.ellapsedTime
    }


    get ellapsedTime() {
        if (!this._startTime) {
            return this._registeredEllapsedTime || 0
        }
        const now = new Date().getTime()
        return now - this._startTime + this._registeredEllapsedTime
    }

    get remainingTime() {
        if (!this._amountInMs || !this._startTime) {
            return 0
        }
        return Math.max(this._amountInMs - this.ellapsedTime, 0)
    }



}