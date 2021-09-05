import React from 'react';
import styles from './styles';
import {TextInput, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

const IconInput = props => {
  const {
    icon,
    onChangeText,
    style,
    error,
    placeholder,
    value,
    onBlur = () => {},
  } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={[styles.inputContainer, style]}>
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
};

IconInput.defaultProps = {
  error: null,
  value: null,
};

IconInput.propTypes = {
  icon: PropTypes.any.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default IconInput;
