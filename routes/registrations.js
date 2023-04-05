const express = require('express');

const router = express.Router();

const { validationResult } = require('express-validator');

const registrations = require('../services/registrations');

const responseSender = require('../middleware/responseSender');

const helper = require('../helper');

const { validate } = require('../validators/createRegistrationValidator');

/* GET registrations listing. */
router.route('/').get(async (req, res, next) => {
  try {
    if (req.query.search) {
      req.responseObject = await registrations.searchByField('user_phone__c', req.query.search);
    } else {
      req.responseObject = await registrations.getMultiple(req.query.page);
    }

    return next();
  } catch (err) {
    req.responseObject = helper.messageResponse(err.message);
    req.responseStatus = 500;
    return next();
  }
}, responseSender);

/* POST store registration */
router.route('/').post(
  validate,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const extractedErrors = {};
        errors.array().map((err) => {
          extractedErrors[err.param] = err.msg;
          return extractedErrors;
        });

        req.responseObject = helper.messageResponse(JSON.stringify(extractedErrors));
        req.responseStatus = 400;

        return next();
      }

      req.responseObject = await registrations.storeRegistration(
        req.body.user_name,
        req.body.user_email,
        req.body.user_phone,
        req.body.user_birth_date,
        req.body.position_duration,
        req.body.company_name,
        req.body.job_position,
        req.body.position_description,
      );

      return next();
    } catch (err) {
      req.responseObject = helper.messageResponse(err.message);
      req.responseStatus = 500;

      return next();
    }
  },
  responseSender,
);

/* POST store registration */
router.route('/create').post(
  validate,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const extractedErrors = {};
        errors.array().map((err) => {
          extractedErrors[err.param] = err.msg;
          return extractedErrors;
        });

        req.responseObject = helper.messageResponse(JSON.stringify(extractedErrors));
        req.responseStatus = 400;

        return next();
      }

      req.responseObject = await registrations.createRegistration(
        req.body.user_name,
        req.body.user_email,
        req.body.user_phone,
        req.body.user_birth_date,
        req.body.position_duration,
        req.body.company_name,
        req.body.job_position,
        req.body.position_description,
      );

      return next();
    } catch (err) {
      req.responseObject = helper.messageResponse(err.message);
      req.responseStatus = 500;

      return next();
    }
  },
  responseSender,
);

module.exports = router;
