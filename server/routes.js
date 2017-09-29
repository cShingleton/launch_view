const express = require('express');

const router = express.Router();
const models = require('./models');
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
