// models/repository.model.ts

import {
  DataTypes,
  Model,
  ModelScopeOptions,
  ModelValidateOptions,
  Optional,
} from 'sequelize';
import { sequelize } from './index';
import { CoreDatabaseAttributes } from '../../core/database-attribues.core';

export interface UserAttributes extends CoreDatabaseAttributes{
  firstName: string;
  lastName: string;
  phone: string;
  birthDay: Date;
}

export interface UserInputAttributes
  extends Optional<UserAttributes, 'id'> { }

const UserDefinition = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  firstName: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  birthDay: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false
  }
}

/*
    code interface
*/

export class User
  extends Model<UserAttributes, UserInputAttributes>
  implements UserAttributes {
  public id: string
  public name: string
  public url: string
}

// Initialization
User.init(RepositoryDefinition, {
  sequelize,
  tableName: 'repositories', // tên bảng trong MySQL
  underscored: true, // chuyển tên cột từ camelCase thành underscored
  updatedAt: true, // mặc định thêm các cột updated_at
  createdAt: true, // và created_at
  scopes: Repository.scopes,
  validate: Repository.validations,
})
