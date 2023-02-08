import 'dotenv/config';
import APP_ENV from './config/server.config';

import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { Database } from './db/sequelize';

// config app
const app: Express = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// config database
Database.getDatabase();

app.listen(APP_ENV.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${APP_ENV.PORT}`);
});
