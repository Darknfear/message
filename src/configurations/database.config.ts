// config env
import { config } from 'dotenv';
config({ path: `${process.cwd()}/.env.${process.env.NODE_ENV || 'development'}` });

// import lib
import { DataSource } from 'typeorm';

export class DatabaseConfiguration extends DataSource {
  private static database: DatabaseConfiguration;
  private constructor() {
    super({
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
  }

  static getDatabaseConfiguration(): DatabaseConfiguration {
    if (this.database) {
      return this.database;
    }
    this.database = new DatabaseConfiguration();
    return this.database;
  }
}
