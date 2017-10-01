const express = require('express');

const router = express.Router();
const models = require('./models');
const moment = require('moment');
const currentUnix = moment.utc().unix();
const { Launches } = models;

// GET /launches
// Get all upcoming launches
router.get('/', (request, response, next) => {
  Launches.find({})
    .exec((err, launches) => {
      if (err) return next(err);
      if (!launches) {
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }
      response.json(launches);
    });
});

router.get('/nextLaunch', (request, response, next) => {
  Launches.find({ tbddate: { $ne: 1 }, timeCheck: { $gte: currentUnix } })
  .sort({ timeCheck: 1 })
  .limit(1)
  .exec((err, doc) => {
    if (err) return next(err);
    if (!doc) {
      err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    response.json(doc);
  });
});

// GET /launches/:id
// Get specific launch
router.get('/:lID', (request, response, next) => {
  Launches.findOne({ 'launchID': request.params.lID }, (err, doc) => {
    if (err) return next(err);
    if (!doc) {
      err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    response.json(doc);
  });
});

module.exports = router;
