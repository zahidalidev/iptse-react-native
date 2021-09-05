import React from 'react';
import styles from './styles';
import { TextInput, View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import CountryPicker from 'react-native-country-picker-modal';
import { normalizeFontSize, normalizeSize } from '../../utils/util';
import COLOR from '../../utils/color';
const { width } = Dimensions.get('window');

const Input = props => {
  const {
    label,
    onChangeText,
    style,
    error,
    placeholder,
    value,
    onBlur = () => { },
    keyboardType = "default",
    country = false,
    countryCode = { countryCode },
    onSelect = { onSelect }
  } = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{label}</Text>
      <View style={[styles.container, style, { flexDirection: "row", alignItems: 'center' }]}>
        {
          country ?
            <CountryPicker
              countryCode={countryCode}
              withFilter={true}
              withFlag={true}
              withCountryNameButton={false}
              withAlphaFilter={true}
              withCallingCode={true}
              withEmoji={true}
              onSelect={onSelect}
              withCallingCodeButton={true}
            /> : null
        }
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLOR.gray0}
          style={[styles.input, { fontSize: normalizeFontSize(15), width: normalizeSize(width * (country ? 0.6 : 0.8), 'width') }]}
          value={value}
          keyboardType={keyboardType}
          onBlur={onBlur}
        />
      </View>
      {error && <Text style={styles.text1}>{error}</Text>}
    </View>
  );
};

Input.defaultProps = {
  error: null,
  value: null,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
