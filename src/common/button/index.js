import React from 'react';
import styles from './styles';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

const Button = props => {
  const {label, onPress = () => {}, style, textStyle} = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  style: {},
  textStyle: {},
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

export default Button;
