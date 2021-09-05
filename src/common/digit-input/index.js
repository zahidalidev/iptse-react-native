import React from 'react';
import styles from './styles';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

const DigitInput = props => {
  const {onChangeText, style, value, onBlur = () => {}} = props;
  return (
    <View style={[styles.container, style]}>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        value={value}
        onBlur={onBlur}
        maxLength={1}
        keyboardType="numeric"
      />
    </View>
  );
};

DigitInput.defaultProps = {
  value: null,
};

DigitInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default DigitInput;
