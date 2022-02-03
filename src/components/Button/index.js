import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from './style.js';

const Button = ({ theme, text, ...rest }) => {
  return (
    <TouchableOpacity theme={theme || ''} {...rest}>
      <Text theme={theme || ''}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string
};

export default Button;
