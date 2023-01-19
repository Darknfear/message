import { Sequelize } from 'sequelize';

export class Database {
  private static database: Database;
  private constructor() {
    this.connection();
  }
  private async connection(): Promise<void> {
    try {
      const sequelize = new Sequelize('message_dev', 'postgres', '123456', {
        host: 'db-backend',
        dialect: 'postgres'
      });
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error: any) {
      console.error('Unable to connect to the database:', error?.message);
    }
  }
  static getDatabase(): Database {
    if (this.database) {
      return this.database;
    }
    this.database = new Database();
    return this.database;
  }
}
