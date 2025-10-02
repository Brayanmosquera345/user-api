import type { Request, Response, NextFunction } from "express";
import { ApiError } from "@/utils/errors/api-error.js";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      code: err.statusCode,
      state: err.state,
      message: err.message,
      details: err.details ?? null,
    });
  }

  console.error("Unexpected error:", err);

  return res.status(500).json({
    code: 500,
    state: "error",
    message: "Something went wrong",
  });
}
