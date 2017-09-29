const express = require('express');
const jsonParser = require('body-parser').json;
const logger = require('morgan');
const moment = require('moment');

const routes = require('./routes');
const { removeOldLaunches, emptyDBCheck, mismatchDayCheck } = require('./dbValidationHelpers');

const app = express();
const currentUnix = moment.utc().unix();
const currentDate = moment().format('YYYY-MM-D');
// morgan for logging
app.use(logger('dev'));
app.use(jsonParser());

// CORS support
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE');
    return res.status(200).json({});
  }
  next();
});

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/launches', {
  useMongoClient: true,
});

const db = mongoose.connection;

db.on('error', err => console.error('connection error:', err));

db.once('open', () => console.log('db connection successful'));

// if db is empty, populate it
emptyDBCheck(db, currentDate, currentUnix);

// check if first item day is less than current
// if so, repopulate with today's data
mismatchDayCheck(db, currentDate, currentUnix);

// check timestamps for today
// if less than current time (discount any with value of 0 (undefined)) then remove
removeOldLaunches(db, currentUnix);

app.use('/launches', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: { message: err.message },
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
