import React from 'react';
import styles from './styles';
import {Pressable, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const RadioButton = props => {
  const {label, onPress = () => {}, style, active} = props;
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {active ? (
        <View style={styles.active}>
          <View style={styles.activeInner} />
        </View>
      ) : (
        <View style={styles.inactive} />
      )}
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

RadioButton.defaultProps = {
  style: {},
  active: false,
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  active: PropTypes.bool,
};

export default RadioButton;
