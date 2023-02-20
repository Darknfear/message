import { Request, Response, NextFunction } from 'express';
import { NotFound, HttpError} from 'http-errors';

export const globalError = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.status).json(err);
}

export const notFoundError = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json(NotFound('What?'))
} 
