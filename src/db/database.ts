import { DataSource, DataSourceOptions } from 'typeorm';
export class Database extends DataSource {
  private static database: Database;
  private constructor(options: DataSourceOptions) {
    super(options);
  }

  static getDatabase(options: DataSourceOptions): Database {
    if (this.database) {
      return this.database;
    }
    this.database = new Database(options);
    return this.database;
  }
}
