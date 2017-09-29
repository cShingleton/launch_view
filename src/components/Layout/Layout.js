import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import moon from '../../assets/images/moon.svg';
import './styles.css';

const Layout = ({ children }) => (
  <div className="appContentWrapper">
    <div className="appHeader">
      <Header />
    </div>
    <div className="appContent">
      {children}
      <img className="back-moon" src={moon} alt="spinning moon" />
    </div>
    <footer className="appFooter">
      <Footer />
    </footer>
  </div>
);

export default Layout;

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
