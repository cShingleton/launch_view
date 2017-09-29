import React from 'react';
import PropTypes from 'prop-types';
import AgencyList from '../AgencyList';
import TextEmphasis from '../TextEmphasis';
import './styles.css';

const LocationInfo = ({ locationData }) => (
  <div className="location-content" >
    <div className="location-details">
      <TextEmphasis text="Location:" content={locationData.name} />
      <TextEmphasis text="Pad Location:" content={locationData.pad.name} />
      <TextEmphasis
        text="Associated Agencies:"
        content={<AgencyList agencyArr={locationData.pad.agencies} />}
      />
    </div>
    <div className="location-header">
      <h1>The Location</h1>
    </div>
  </div>
);

export default LocationInfo;

LocationInfo.propTypes = {
  locationData: PropTypes.shape({
    name: PropTypes.string,
    pad: PropTypes.shape({
      name: PropTypes.string,
      agencies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    }),
  }).isRequired,
};
