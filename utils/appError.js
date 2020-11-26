class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // { sets the message property to the incoming message object
    // so we dont need to explicitly set it using this.message! }

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
