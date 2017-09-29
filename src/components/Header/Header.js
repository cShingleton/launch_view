import React from 'react';
import { AppBar, RaisedButton, FlatButton } from 'material-ui';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
  <AppBar
    showMenuIconButton={false}
    className={'headerbar'}
    title={
      <div className="title-wrapper">
        <h1 className="page-header">Launch_View</h1>
      </div>
    }
  >
    <div>
      <div className="headerbuttonwrapper">
        <Link to={'/'}>
          <RaisedButton
            className="headerbar-btns"
            label="Next Launch"
          />
        </Link>
        <Link to={'/upcoming'}>
          <FlatButton
            className="headerbar-btns"
            label="Upcoming Launches"
          />
        </Link>
      </div>
    </div>
  </AppBar>
);

export default Header;
