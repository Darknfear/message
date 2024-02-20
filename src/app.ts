import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// config alias module and metadata
import 'module-alias/register';
import 'reflect-metadata';

import express, { Express } from 'express';
import bodyParser from 'body-parser';
// import { Database } from './db/database';
import { globalError, notFoundError } from './middlewares/error.middleware';
import route from './routes';
import { DatabaseConfiguration } from '@configs/database.config';

// config app
const app: Express = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//config database
DatabaseConfiguration.getDatabaseConfiguration()
  .initialize()
  .then(() => {
    console.log(`Connected to database!`);
  })
  .catch((err) => {
    console.log(`Error when connect to database!`);
    console.log(`${err?.message || err}`);
  });

// config router
app.use(route);

// 404 not found
app.use(notFoundError);

// global response
app.use(globalError);

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
});
