import { Table, Column, Model, Sequelize, Default, PrimaryKey, AutoIncrement, IsEmail, IsInt, Length, IsDate } from 'sequelize-typescript';

import { DataTypes, CreationOptional } from 'sequelize';

import config from '../config/config';

const sequelize = new Sequelize(config.db.connectionString, {
  dialect: 'postgres',
});

export type RegistrationCollection = Registration[];

@Table({timestamps: false, schema: 'salesforce', tableName: 'grant_money_info__c'})
export default class Registration extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.BIGINT)
  id: CreationOptional<number> | undefined;

  @Column(DataTypes.STRING)
  sfid: string | undefined;

  @Length({ max: 10 })
  @Column(DataTypes.TEXT)
  user_phone__c: string | undefined;

  @IsEmail
  @Column(DataTypes.STRING)
  user_email__c: string | undefined;

  @IsDate
  @Column(DataTypes.DATE)
  user_birth_date__c: Date | null | undefined;

  @IsInt
  @Column(DataTypes.INTEGER)
  position_duration__c: number | undefined;

  @Column(DataTypes.STRING)
  company_name__c: string | undefined;

  @Column(DataTypes.STRING)
  job_position__c: string | undefined;

  @Column(DataTypes.STRING)
  position_description__c: string | undefined;

  @Default(false)
  @Column(DataTypes.BOOLEAN)
  isdeleted: boolean | undefined;

  @Default(DataTypes.NOW)
  @Column(DataTypes.DATE)
  createddate: Date | undefined;

}

sequelize.addModels([__dirname + '/*.model.js']);
sequelize.addModels([__dirname + '/*.model.ts']);
// sequelize.addModels([
//   Registration,
// ])