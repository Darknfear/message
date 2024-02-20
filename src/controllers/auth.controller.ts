import { NextFunction, Request, Response } from 'express';
import { InternalServerError } from 'http-errors';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ data: true });
}
