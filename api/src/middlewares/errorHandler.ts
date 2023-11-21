import { ErrorRequestHandler, NextFunction, Response } from "express";

function errorHandler(error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) {
  return response.sendStatus(500);
}

module.exports = errorHandler;