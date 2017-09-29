const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AgencySchema = new Schema({
  name: String,
  wikiURL: String,
});

const MissionSchema = new Schema({
  name: String,
  description: String,
  typeName: String,
});

const LaunchSchema = new Schema({
  launchID: Number,
  favourite: { type: Boolean, default: false },
  tbddate: Number,
  name: String,
  timeCheck: Number,
  windowStart: String,
  windowEnd: String,
  launchMonth: String,
  location: {
    name: String,
    pad: {
      name: String,
      agencies: [AgencySchema],
    },
  },
  rocket: {
    name: String,
    wikiURL: String,
    imageURL: String,
    agencies: [AgencySchema],
  },
  missions: [MissionSchema],
});

const Launches = mongoose.model('Launch', LaunchSchema);
const Agency = mongoose.model('Agency', AgencySchema);
const Mission = mongoose.model('Mission', MissionSchema);

module.exports.Launches = Launches;
module.exports.Agency = Agency;
module.exports.Mission = Mission;
