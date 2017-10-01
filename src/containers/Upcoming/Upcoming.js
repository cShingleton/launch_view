import React from 'react';
import PropTypes from 'prop-types';
import LaunchMonth from '../../components/LaunchMonth';
import LaunchModal from '../../components/LaunchModal';
import './styles.css';

const Upcoming = ({ upcomingLaunches, modalOpen, toggleModal }) => (
  <div className="launchcard-list-wrapper">
    {upcomingLaunches.map(launch => (
        <LaunchMonth
          key={Object.keys(launch)}
          header={Object.keys(launch)}
          launch={launch[Object.keys(launch)[0]]}
          modalOpen={modalOpen}
          toggleModal={toggleModal}
        />
    ))}
    <LaunchModal launchData={upcomingLaunches[0].October[0]} modalOpen={modalOpen} toggleModal={toggleModal} />
  </div>
);

export default Upcoming;

Upcoming.propTypes = {
  upcomingLaunches: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
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
  })))).isRequired,
};
