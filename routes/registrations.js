const express = require('express');

const router = express.Router();

const { body, validationResult } = require('express-validator');
const registrations = require('../services/registrations');

const responseSender = require('../middleware/responseSender');

const helper = require('../helper');

/* GET registrations listing. */
router.get('/', async (req, res, next) => {
  try {
    req.responseObject = await registrations.getMultiple(req.query.page);

    return next();
  } catch (err) {
    req.responseObject = helper.messageResponse(err.message);
    req.responseStatus = 500;
    return next();
  }
}, responseSender);

/* POST store registration */
router.post(
  '/',
  body('user_name').notEmpty(),
  body('user_birth_date').notEmpty().isDate({ format: 'YYYY-MM-DD' }),
  body('position_duration').notEmpty().isNumeric(),
  body('company_name').notEmpty(),
  body('job_position').notEmpty(),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        req.responseObject = helper.messageResponse(JSON.stringify(errors.array()));
        req.responseStatus = 400;

        return next();
      }

      req.responseObject = await registrations.storeRegistration(
        req.body.user_name,
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
