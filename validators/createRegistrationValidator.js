const { body } = require('express-validator');

exports.validate = [
  body('user_phone')
    .notEmpty()
    .withMessage('User\'s phone can not be empty'),
  body('user_email')
    .notEmpty()
    .withMessage('User\'s email can not be empty')
    .isEmail()
    .withMessage('User\'s email is wrong format'),
  body('user_name').notEmpty().withMessage('Username can not be empty'),
  body('user_birth_date')
    .notEmpty()
    .withMessage('User\'s birthday can not be empty')
    .isDate({ format: 'YYYY-MM-DD' })
    .withMessage('User\'s birthday is wrong format'),
  body('position_duration')
    .notEmpty()
    .withMessage('Position duration can not be empty')
    .isNumeric()
    .withMessage('Position duration must be a number'),
  body('company_name')
    .notEmpty()
    .withMessage('Company name can not be empty'),
  body('job_position')
    .notEmpty()
    .withMessage('Job position can not be empty'),
];
