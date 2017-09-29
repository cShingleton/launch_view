import React from 'react';
import PropTypes from 'prop-types';
import TextEmphasis from '../TextEmphasis';
import './styles.css';

const AgencyList = ({ agencyArr }) => (
  <ul>
    {agencyArr.map(agency => (
      <li key={agency._id}>
        <TextEmphasis
          text="-"
          content={<a href={agency.wikiURL} target="_blank">{agency.name}</a>}
        />
      </li>))}
  </ul>
);

export default AgencyList;

AgencyList.propTypes = {
  agencyArr: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
