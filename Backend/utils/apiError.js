export class apiError extends Error {
  constructor(
    message = "Something Went Wrong",
    statusCode,
    errors = [],
    stack
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    (this.data = null), (this.success = false), (this.message = message);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
