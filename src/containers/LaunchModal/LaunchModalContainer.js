import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LaunchModal from './LaunchModal';

class LaunchModalContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  render() {
    return (
      <LaunchModal />
    );
  }
}

export default LaunchModalContainer;

LaunchModalContainer.propTypes = {
  
};
