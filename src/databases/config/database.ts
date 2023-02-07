import DATABASE_ENV from '../../config/database.config';

module.exports = {
  dev: {
    username: DATABASE_ENV.username,
    password: DATABASE_ENV.password,
    database: DATABASE_ENV.database,
    host: DATABASE_ENV.host,
    port: 5432,
    dialect: 'postgres',
  },
}