const db = require('../databases/db');
const helper = require('../helper');
const config = require('../config/config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(config.listPerPage, page);

  const rows = await db.query(
    'SELECT * FROM grant_money_info__c OFFSET $1 LIMIT $2',
    [offset, config.listPerPage],
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function storeRegistration(
  username,
  userBirthDate,
  positionDuration,
  companyName,
  jobPosition,
  positionDescription,
) {
  await db.insert('grant_money_info__c', {
    user_name__c: username,
    user_birth_date__c: userBirthDate,
    position_duration__c: positionDuration,
    company_name__c: companyName,
    job_position__c: `${jobPosition} - ${positionDescription}`,
    createddate: (new Date()).toISOString(),
    isdeleted: false,
  });

  return helper.messageResponse('Create successfully');
}

module.exports = {
  getMultiple,
  storeRegistration,
};
