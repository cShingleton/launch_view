const populateDB = require('./schemaHelpers').populateDB;
const moment = require('moment');


// check timestamps for today
// if less than current time (discount any with value of 0 (undefined)) then remove
const removeOldLaunches = (db, currentUnix) => {
  db.collection('launches').findOne({ timeCheck: { $lt: currentUnix, $ne: 0 } }, (err, launches) => {
    if (launches !== null) {
      db.collection('launches').remove({ timeCheck: { $lt: currentUnix, $ne: 0 } });
      console.log('old launches removed');
    }
  });
};

// if db is empty, populate it
const emptyDBCheck = (db, currentDate) => {
  db.collection('launches').count((err, count) => {
    if (count === 0) {
      console.log('DB empty. Populating now...');
      populateDB(currentDate);
    } else {
      console.log(`Found Records: ${count}`);
    }
  });
};

// check if first item day is less than current
// if so, repopulate with today's data
const mismatchDayCheck = (db, currentDate) => {
  db.collection('launches').count((err, count) => {
    if (count > 0) {
      db.collection('launches').findOne({}, (error, launch) => {
        const formatLaunchDate = launch.windowStart.match(/[^T]+/).join('');
        const currDate = moment().format('YYYYMMD');
        if ((parseInt(formatLaunchDate, 10) < parseInt(currDate, 10)) && (launch.tbddate !== 1)) {
          console.log('Time discrepancy found: repopulating db...');
          // wipe db
          db.collection('launches').remove({});
          // repopulate
          populateDB(currentDate);
        }
      });
    }
  });
};

module.exports.removeOldLaunches = removeOldLaunches;
module.exports.emptyDBCheck = emptyDBCheck;
module.exports.mismatchDayCheck = mismatchDayCheck;
