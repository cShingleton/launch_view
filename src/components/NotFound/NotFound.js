import React from 'react';
import Rocket from '../../assets/images/rocket-ico.svg';
import './styles.css';

const NotFound = () => (
  <div className="missing-wrapper">
    <img className="not-found-rocket" src={Rocket} alt="Blast off rocket" />
    <h4 id="missing-error-message">This page appears to have blasted off... (404)</h4>
  </div>
);

export default NotFound;
