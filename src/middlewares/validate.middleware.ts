import type { Request, Response, NextFunction } from "express";
import { ZodError, type ZodSchema } from "zod";
import { ApiError } from "@/utils/errors/api-error.js";

export function validate(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
      if (err instanceof ZodError) {  
        return next(
          ApiError.badRequest("Validation error", err.issues)
        );
      }
      next(err);
    }
  };
}
