const express = require('express');

const router = express.Router();

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
router.route('/').post(
  async (req, res, next) => {
    try {
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
