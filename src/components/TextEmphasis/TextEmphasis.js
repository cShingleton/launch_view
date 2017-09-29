import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TextEmphasis = ({ text, content }) => (
  <h4><span className="text-emphasis">{text}</span> {content}</h4>
);

export default TextEmphasis;

TextEmphasis.defaultProps = {
  content: null,
};

TextEmphasis.propTypes = {
  text: PropTypes.string.isRequired,
  content: PropTypes.node,
};

