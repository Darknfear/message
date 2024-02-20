import { NextFunction, Request, Response } from "express";

export const catchAsync = (func: Function) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(func(req, res)).catch(next);
