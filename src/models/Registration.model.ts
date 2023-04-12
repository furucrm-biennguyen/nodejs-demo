import { Table, Column, Model, Sequelize } from 'sequelize-typescript';

import { DataTypes, CreationOptional } from 'sequelize';

import { config } from '../config/config';

const sequelize = new Sequelize(config.db.connectionString, {
  dialect: 'postgres',
});

@Table({timestamps: false, schema: 'salesforce', tableName: 'grant_money_info__c'})
export default class Registration extends Model {
  @Column({type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true})
  id: CreationOptional<number> | undefined;

  @Column({type: DataTypes.TEXT})
  user_phone__c: string | undefined;

  @Column(DataTypes.DATE)
  user_birth_date__c: Date | null | undefined;

}

sequelize.addModels([__dirname + '/*.model.js']);
sequelize.addModels([__dirname + '/*.model.ts']);
// sequelize.addModels([
//   Registration,
// ])