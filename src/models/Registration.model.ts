import { Table, Column, Model, Sequelize } from 'sequelize-typescript';

import { InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from 'sequelize';

import { config } from '../config/config';

const sequelize = new Sequelize(config.db.connectionString, {
  dialect: 'postgres',
});

@Table({timestamps: false, schema: 'salesforce', tableName: 'grant_money_info__c'})
export default class Registration extends Model {
  @Column(DataTypes.BIGINT)
  id: CreationOptional<number> | undefined;

  @Column({type: DataTypes.TEXT, primaryKey: true})
  user_phone__c: string | undefined;

  @Column(DataTypes.DATE)
  user_birth_date__c: Date | null | undefined;

}

console.log(__dirname);

sequelize.addModels([__dirname + '/*.model.js']);
// sequelize.addModels([
//   Registration,
// ])