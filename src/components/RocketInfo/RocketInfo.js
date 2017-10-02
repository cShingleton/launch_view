import React from 'react';
import PropTypes from 'prop-types';
import TextEmphasis from '../TextEmphasis';
import AgencyList from '../AgencyList';
import './styles.css';

const RocketInfo = ({ rocketData }) => (
  <div className="rocket-content">
    <img
      src={rocketData.imageURL}
      alt={rocketData.name}
    />
    <div className="rocket-header">
      <h1>The Rocket</h1>
    </div>
    <div className="rocket-details">
      <TextEmphasis text="Name:" content={rocketData.name} />
      <TextEmphasis
        text="Associated Agencies:"
        content={<AgencyList agencyArr={rocketData.agencies} />}
      />
      <TextEmphasis
        text="Find out more:"
        content={<a href={rocketData.wikiURL} target="_blank">Wikipedia</a>}
      />
    </div>
  </div>
);

export default RocketInfo;

RocketInfo.propTypes = {
  rocketData: PropTypes.shape({
    name: PropTypes.string,
    wikiURL: PropTypes.string,
    imageURL: PropTypes.string,
    agencies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
};
