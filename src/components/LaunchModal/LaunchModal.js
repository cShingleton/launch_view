import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'material-ui';
import RocketInfo from '../../components/RocketInfo';
import MissionInfo from '../../components/MissionInfo';
import LocationInfo from '../../components/LocationInfo';
import './styles.css';

const LaunchModal = ({ launchData, modalOpen, toggleModal }) => (
  <Dialog
    open={modalOpen}
    onRequestClose={() => toggleModal(modalOpen)}
    paperClassName={'paper'}
    className={'modal-root'}
  >
    <div className="modal-launch-container">
      <div className="home-header">
        <h1>{launchData.name}</h1>
      </div>
      <div className="next-launch-content">
        <div className="rocket-and-mission-content-container">
          <RocketInfo rocketData={launchData.rocket} />
          <MissionInfo
            missionData={launchData.missions[0]}
            launchTime={launchData.timeCheck}
            tbddate={launchData.tbddate}
          />
        </div>
        <LocationInfo locationData={launchData.location} />
      </div>
    </div>
  </Dialog >
);

export default LaunchModal;

LaunchModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  launchData: PropTypes.shape({
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
  }).isRequired,
};
