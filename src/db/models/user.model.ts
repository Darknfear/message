import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { CoreDatabaseAttributes } from '../../core/database-attribues.core';
import { Database, createSequelize } from '../sequelize';
import sequelize from 'sequelize';
const sequelizeConnection = new Sequelize('message_dev', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});
interface IUserAttributes extends CoreDatabaseAttributes {
  firstName?: string;
  lastName?: string;
  phone: string;
  birthDay?: Date;
}

export interface IUserInput extends Optional<IUserAttributes, 'id'> { }
export interface IUserOutput extends Required<IUserAttributes> { }

class User extends Model<IUserAttributes, IUserInput> implements IUserAttributes {
  id!: string;
  firstName?: string;
  lastName?: string;
  phone!: string;
  birthDay?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  createdBy?: string;
  deletedBy?: string;
}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDay: {
    type: "TIMESTAMP",
    allowNull: true,
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: true,
  },
  updatedAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: true,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true
  },
  deletedAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: true,
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
});

export default User;
