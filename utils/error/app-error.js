class AppError extends Error {
    constructor ( message, statusCode ){
        super(message);
        this.statusCode = statusCode;
        this.expalnation = message;
    }
}

export default AppError;