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

};
