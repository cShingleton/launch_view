import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import TextEmphasis from '../TextEmphasis';
import './styles.css';

const MissionInfo = ({ missionData, launchTime }) => (
  <div className="mission-content">
    <div className="mission-header">
      <h1>The Mission</h1>
    </div>
    <div className="mission-details">
      <TextEmphasis
        text="Launch Date:"
        content={
          "Nothing"
        }
      />
      <TextEmphasis text="Name:" content={missionData.name} />
      <TextEmphasis text="Description:" content={missionData.description} />
      <TextEmphasis text="Mission Type:" content={missionData.typeName} />
    </div>
  </div>
);

export default MissionInfo;

MissionInfo.defaultProps = {
  missionData: null,
};

MissionInfo.propTypes = {
  missionData: PropTypes.objectOf(PropTypes.string),
};
