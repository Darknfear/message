import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { Database } from './databases/sequelize';

// config app
const app: Express = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// config database
Database.getDatabase();

// export app
export default app;