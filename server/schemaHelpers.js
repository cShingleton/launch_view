const fetch = require('node-fetch');
const models = require('./models');
const { Launches, Mission, Agency } = models;

const agencyMap = (agencyList) => {
  return agencyList.map((agency) => {
    return new Agency({
      name: agency.name,
      wikiURL: agency.wikiURL,
    });
  });
};

// helper because moment conversion and formatting of the ISO was choking up the db populate
const parseMonth = iso => iso.match(/[^\s]+/).join('');

// based on my front-end design I need the smallest photo available
const parsePhoto = (photoURL) => {
  // match digits immediately preceeded by an underscore and followed by a full stop
  const underscoreMatch = /_(?=\d)[\d]+(?=.)/;
  return photoURL.replace(underscoreMatch, '_320');
};

const populateDB = (date) => {
  fetch(`https://launchlibrary.net/1.2/launch/${date}?limit=50`)
    .then(res => res.json())
    .then((data) => {
      data.launches.map((launch) => {
        const missionCheck = launch.missions.length;
        const mission = new Mission({
          name: (missionCheck === 0) ? 'Unknown' : launch.missions[0].name,
          description: (missionCheck === 0) ? 'Unknown' : launch.missions[0].description,
          typeName: (missionCheck === 0) ? 'Unknown' : launch.missions[0].typeName,
        });

        const Launch = new Launches({
          launchID: launch.id,
          name: launch.name,
          tbddate: launch.tbddate,
          windowStart: launch.isostart,
          windowEnd: launch.isoend,
          launchMonth: parseMonth(launch.windowstart),
          // needs conversion to local time
          timeCheck: launch.wsstamp,
          location: {
            name: launch.location.name,
            pad: {
              // only ever is one pad so can access with index 0
              name: launch.location.pads[0].name,
              agencies: agencyMap(launch.location.pads[0].agencies),
            },
          },
          rocket: {
            name: launch.rocket.name,
            wikiURL: launch.rocket.wikiURL,
            imageURL: parsePhoto(launch.rocket.imageURL),
            agencies: agencyMap(launch.rocket.agencies),
          },
          missions: mission,
        });

        return Launches.create(Launch, (err) => {
          if (err) return console.error(err);
          return console.log('Success', 202);
        });
      });
    }).catch(err => console.error(err));
};

module.exports.agencyMap = agencyMap;
module.exports.populateDB = populateDB;
