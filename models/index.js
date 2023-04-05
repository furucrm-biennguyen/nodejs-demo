const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.db.connectionString, {
  dialect: 'postgres',
  timestamps: false,
});

const RegistrationModel = require('./registration');

const models = {
  Registration: RegistrationModel(sequelize, Sequelize),
};

// Associate all model
// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

const db = {
  ...models,
  sequelize,
};

module.exports = db;
