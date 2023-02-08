import {
  DataTypes,
  Model,
  ModelScopeOptions,
  ModelValidateOptions,
  Optional,
  Sequelize,
} from 'sequelize';
import { sequelize } from './index';
import { CoreDatabaseAttributes } from '../../core/database-attributes.core';

export interface UserAttributes extends CoreDatabaseAttributes {
  firstName?: string;
  lastName?: string;
  phone?: string;
  birthDay?: Date;
}

// Define input and output interface
export interface UserInputAttributes
  extends Optional<UserAttributes, 'id'> { }
export interface UserOutputAttributes extends Required<UserAttributes> { }

// Define sequelize user
export const UserDefinition = {
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
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  birthDay: {
    type: 'TIMESTAMP',
    allowNull: true
  },
  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updatedAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  deletedAt: {
    type: 'TIMESTAMP',
    allowNull: true
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: true
  }
}

export class User
  extends Model<UserAttributes, UserInputAttributes>
  implements UserAttributes {
  id!: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  birthDay?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  createdBy?: string;
  deletedBy?: string;
}

// Initialization
User.init(UserDefinition, {
  sequelize,
  tableName: 'users', // table name
  underscored: true
  
})
