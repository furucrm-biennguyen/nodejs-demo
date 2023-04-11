const { Registration } = require('../models/index');
const db = require('../databases/db');
const helper = require('../helper');
const config = require('../config/config');

const defaultSchema = 'salesforce.grant_money_info__c';

async function getMultiple(page = 1) {
  const offset = helper.getOffset(config.listPerPage, page);

  const rows = await db.query(
    `SELECT * FROM ${defaultSchema} OFFSET $1 LIMIT $2`,
    [offset, config.listPerPage],
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function searchByField(fieldName, fieldValue) {
  const rows = await db.query(
    `SELECT * FROM ${defaultSchema} WHERE ${fieldName} = $1`,
    [fieldValue],
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

async function storeRegistration(
  username,
  userEmail,
  userPhone,
  userBirthDate,
  positionDuration,
  companyName,
  jobPosition,
  positionDescription,
) {
  await db.insert(defaultSchema, {
    user_name__c: username,
    user_email__c: userEmail,
    user_phone__c: userPhone,
    user_birth_date__c: userBirthDate,
    position_duration__c: positionDuration,
    company_name__c: companyName,
    job_position__c: jobPosition,
    position_description__c: positionDescription,
    createddate: (new Date()).toISOString(),
    isdeleted: false,
  });

  return helper.messageResponse('Create successfully');
}

async function createRegistration(
  username,
  userEmail,
  userPhone,
  userBirthDate,
  positionDuration,
  companyName,
  jobPosition,
  positionDescription,
) {
  const registration = await Registration.create({
    user_name__c: username,
    user_email__c: userEmail,
    user_phone__c: userPhone,
    user_birth_date__c: userBirthDate,
    position_duration__c: positionDuration,
    company_name__c: companyName,
    job_position__c: jobPosition,
    position_description__c: positionDescription,
  });

  const body = helper.messageResponse('Create successfully');
  body.data = helper.emptyOrRows(registration);

  return body;
}

module.exports = {
  getMultiple,
  searchByField,
  storeRegistration,
  createRegistration,
};
