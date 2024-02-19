import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// config alias module and metadata
import "module-alias/register";
import "reflect-metadata";

import express, { Express } from 'express';
import bodyParser from 'body-parser';
// import { Database } from './db/database';
import { globalError, notFoundError } from './middlewares/error.middleware';
import route from './routes';
import { Database } from 'db/database';

// config app
const app: Express = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//config database
Database.getDatabase({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src/databases/entities/**.entity{.ts,.js}'],
  migrations: ['src/databases/migrations/**/*{.ts,.js}'],
  subscribers: ['src/databases/subscriber/**/*{.ts,.js}'],
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
