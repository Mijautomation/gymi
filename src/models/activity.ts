export class Activity {

    constructor(private _sessionId,
                private _activityType?,
                private _dateTime?,
                private _amount?,
                private _sessionTimes?,
                private _message?,
                private _highScore?,
                private _id?) {
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get sessionId() {
        return this._sessionId;
    }

    set sessionId(value) {
        this._sessionId = value;
    }

    get activityType() {
        return this._activityType;
    }

    set activityType(value) {
        this._activityType = value;
    }

    get dateTime() {
        return this._dateTime;
    }

    set dateTime(value) {
        this._dateTime = value;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get sessionTimes() {
        return this._sessionTimes;
    }

    set sessionTimes(value) {
        this._sessionTimes = value;
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    get highScore() {
        return this._highScore;
    }

    set highScore(value) {
        this._highScore = value;
    }
}