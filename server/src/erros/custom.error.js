class CustomError extends Error{
    constructor(message, statusCode) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
        this.statusCode = statusCode
    }
}

module.exports = CustomError;