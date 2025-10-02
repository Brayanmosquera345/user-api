import { Prisma } from "@prisma/client";
import { ApiError } from "@/utils/errors/api-error.js";
//Centralizacion de los errores de prisma
export function handlePrismaError(err: unknown, context?: string): never {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        throw ApiError.conflict(`${context ?? "Resource"} already exists`, {
          field: err.meta?.target,
        });

      case "P2025": // Record not found
        throw ApiError.notFound(`${context ?? "Resource"} not found`);

      case "P2003": // Foreign key constraint failed
        throw ApiError.badRequest(`Invalid relation for ${context ?? "resource"}`, {
          field: err.meta?.field_name,
        });
    }
  }

  throw err;
}
