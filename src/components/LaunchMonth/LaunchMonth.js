import React from 'react';
import PropTypes from 'prop-types';
import LaunchTiles from '../LaunchTiles';
import './styles.css';

const LaunchMonth = ({ header, launch, modalOpen, toggleModal, fetchModalData }) => (
  <div className="launch-month-container">
    <div className="launch-month-header">
      <h2>{header}</h2>
    </div>
    <LaunchTiles
      launch={launch}
      modalOpen={modalOpen}
      toggleModal={toggleModal}
      fetchModalData={fetchModalData}
    />
  </div>
);

export default LaunchMonth;

LaunchMonth.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  launch: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};
