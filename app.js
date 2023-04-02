const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require("dotenv");

dotenv.config({
  path: './.env',
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const indexRouter = require('./routes/index');
const registrationsRouter = require('./routes/registrations');

// app.use('/', indexRouter);
app.use('/api/registrations', registrationsRouter);

module.exports = app;
