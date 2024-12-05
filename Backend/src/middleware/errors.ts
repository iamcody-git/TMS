import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { APIError } from '../../utils/APIError';

// Define the errorHandler middleware function with proper TypeScript types
const errorHandler = (
  err: any, // You can use a more specific type for error if desired
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  let error = err;

  if (!(error instanceof APIError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? 400 : 500;

    const message = error.message || 'Something went wrong';
    error = new APIError(statusCode, message, error?.errors || [], err.stack);
  }

  const response = {
    ...error,
    message: error.message,
    ...(process.env.NODE_ENV === 'development' ? { stack: error.stack } : {}),
  };

  return res.status(error.statusCode).json(response);
};

export { errorHandler };
