import { Router } from 'express';
import v1Route from './v1';
const apiRoute = Router();

apiRoute.use('/apis', v1Route);

export default apiRoute;
