import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily, normalizeFontSize, normalizeSize} from '../../utils/util';
import COLOR from '../../utils/color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: normalizeSize(34, 'width'),
    height: normalizeSize(45, 'width'),
    borderRadius: normalizeSize(10, 'width'),
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomColor: COLOR.red,
    // borderBottomWidth: normalizeSize(5, 'widht'),
  },
  text: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(16),
    marginBottom: normalizeSize(10, 'height'),
  },
  text1: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.red,
    fontSize: normalizeFontSize(14),
  },
  input: {
    width: normalizeSize(34, 'width'),
    height: normalizeSize(45, 'width'),
    alignItems: 'center',
    backgroundColor: COLOR.slate,
    borderRadius: normalizeSize(8, 'width'),
    elevation: 5,
    color: COLOR.white,
    fontSize: normalizeFontSize(20),
    borderBottomColor: COLOR.darkGreen,
    borderBottomWidth: normalizeSize(5, 'widht'),
    textAlign: 'center',
  },
});

export default styles;
