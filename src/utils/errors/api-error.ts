export class ApiError extends Error {
    public readonly statusCode: number;
    public readonly state: string;
    public readonly details?: unknown;

    constructor(statusCode: number, state: string, message: string, details?: unknown) {
        super(message);
        this.statusCode = statusCode;
        this.state = state;
        this.details = details;
        Object.setPrototypeOf(this, new.target.prototype);
    }

    static badRequest(msg: string, details?: unknown) {
        return new ApiError(400, "error", msg, details);
    }
    static notFound(msg: string) {
        return new ApiError(404, "error", msg);
    }
    static internal(msg = "Internal server error") {
        return new ApiError(500, "error", msg);
    }
    static conflict(msg: string, details?: unknown) {
        return new ApiError(409, "error", msg, details);
    }

}
