import { Router } from 'express';
import authRoute from './auth.v1';
const route = Router();

route.use('/v1', authRoute);

export default route;
