import { QueryInterface } from 'sequelize';
import { User, UserDefinition } from '../models/user';

module.exports = {
  up: async (query: QueryInterface): Promise<void> => {
    await query.sequelize.transaction(async transaction => {
      return await query.createTable<User>(User.tableName, UserDefinition, { transaction });
    })
  },
  down: async (query: QueryInterface): Promise<void> => {
    await query.sequelize.transaction(async transaction => {
      return await query.dropTable(User.tableName, { transaction });
    })
  }
}
