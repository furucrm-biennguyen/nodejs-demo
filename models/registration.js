module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define(
    'grant_money_info__c',
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      sfid: {
        type: DataTypes.STRING,
      },
      user_name__c: {
        type: DataTypes.STRING,
      },
      user_phone__c: {
        type: DataTypes.STRING,
      },
      user_email__c: {
        type: DataTypes.STRING,
      },
      user_birth_date__c: {
        type: DataTypes.DATEONLY,
      },
      position_duration__c: {
        type: DataTypes.INTEGER,
      },
      company_name__c: {
        type: DataTypes.STRING,
      },
      job_position__c: {
        type: DataTypes.STRING,
      },
      position_description__c: {
        type: DataTypes.STRING,
      },
      isdeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createddate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      schema: 'salesforce',
      tableName: 'grant_money_info__c',
      timestamps: false,
    },
  );

  return Registration;
};
