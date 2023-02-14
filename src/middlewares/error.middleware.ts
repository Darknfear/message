import { Request, Response, NextFunction } from 'express';
import { NotFound, HttpError, HttpErrorConstructor } from 'http-errors';

export const globalError = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.status).json(err)
}

export const notFoundError = async (req: Request, res: Response, next: NextFunction) => {
  next(NotFound('What?'));
} 
