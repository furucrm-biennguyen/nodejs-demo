const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const indexRouter = require('./routes/index');
const registrationsRouter = require('./routes/registrations');
const employeesRouter = require('./routes/employees');

// app.use('/', indexRouter);
app.use('/api/registrations', registrationsRouter);
app.use('/api/employees', employeesRouter);

module.exports = app;
