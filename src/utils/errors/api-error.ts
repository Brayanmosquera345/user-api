export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly state: string;

  constructor(statusCode: number, state: string = "error", message: string) {
    super(message);
    this.statusCode = statusCode;
    this.state = state;
    Object.setPrototypeOf(this, new.target.prototype); // fix instanceof
  }

  static badRequest(msg: string) {
    return new ApiError(400, "error", msg);
  }

  static notFound(msg: string) {
    return new ApiError(404, "error", msg);
  }

  static internal(msg = "Internal server error") {
    return new ApiError(500, "error", msg);
  }
}
