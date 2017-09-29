import React from 'react';
import PropTypes from 'prop-types';
import RocketInfo from '../../components/RocketInfo';
import MissionInfo from '../../components/MissionInfo';
import LocationInfo from '../../components/LocationInfo';
import './styles.css';

const Home = ({ nextLaunch }) => (
  <div className="next-launch-container">
    <div className="home-header">
      <h1>{nextLaunch.name}</h1>
    </div>
    <div className="next-launch-content">
      <div className="rocket-and-mission-content-container">
        <RocketInfo rocketData={nextLaunch.rocket} />
        <MissionInfo
          missionData={nextLaunch.missions[0]}
          launchTime={nextLaunch.timeCheck}
        />
      </div>
      <LocationInfo locationData={nextLaunch.location} />
    </div>
  </div>
);

export default Home;

Home.propTypes = {
  nextLaunch: PropTypes.shape({
    _id: PropTypes.string,
    launchID: PropTypes.number,
    name: PropTypes.string,
    tbddate: PropTypes.number,
    windowStart: PropTypes.string,
    windowEnd: PropTypes.string,
    launchMonth: PropTypes.string,
    __v: PropTypes.number,
    missions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    rocket: PropTypes.shape({
      name: PropTypes.string,
      wikiURL: PropTypes.string,
      imageURL: PropTypes.string,
      agencies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    }),
    location: PropTypes.shape({
      name: PropTypes.string,
      pad: PropTypes.shape({
        name: PropTypes.string,
        agencies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      }),
    }),
    favourite: PropTypes.bool,
  }).isRequired,
};
