import { Router } from 'express';
import apiRoute from './api';

const route = Router();

route.use(apiRoute);

export default route;
