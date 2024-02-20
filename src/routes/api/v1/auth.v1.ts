import { Router, Request, Response } from 'express';
import { catchAsync } from '../../../utils/catch-async';
import { login } from '../../../controllers/auth.controller';

const route = Router();

route.get('/auth', catchAsync(login));

export default route;
