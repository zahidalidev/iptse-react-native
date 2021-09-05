import { StyleSheet, Dimensions } from 'react-native';
import { FontFamily, normalizeFontSize, normalizeSize } from '../../utils/util';
import COLOR from '../../utils/color';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    width: normalizeSize(width * 0.8, 'width'),
    alignSelf: 'center',
    marginBottom: normalizeSize(18, 'height'),
  },
  container: {
    width: normalizeSize(width * 0.8, 'width'),
    borderRadius: normalizeSize(10, 'width'),
    borderWidth: 1,
    borderColor: COLOR.gray1,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
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
    paddingStart: normalizeSize(12, 'width'),
    width: normalizeSize(width * 0.8, 'width'),
    color: COLOR.black,
  },
});

export default styles;
