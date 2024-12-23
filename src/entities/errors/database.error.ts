export class DatabaseError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class DBInternalServerError extends DatabaseError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
