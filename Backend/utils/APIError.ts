class APIError extends Error {
  statusCode: any;
  data: null;
  success: boolean;
  errors: any;
  constructor(
    statusCode: any,
    message = "sth went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = this.errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { APIError };
