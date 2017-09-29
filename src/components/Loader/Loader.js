import React from 'react';
import { CircularProgress } from 'material-ui';
import theme from '../../config/theme';
import './styles.css';

const Loader = () => (
  <div className="loader-wrapper">
    <CircularProgress color={theme.palette.alternateTextColor} />
  </div>
);

export default Loader;
