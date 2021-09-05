import {StyleSheet, Dimensions} from 'react-native';
import {
  FontFamily,
  normalizeFontSize,
  normalizeSize,
} from '../../../utils/util';
import COLOR from '../../../utils/color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: normalizeSize(width * 0.9, 'width'),
    borderRadius: normalizeSize(30, 'width'),
    backgroundColor: COLOR.gray2,
    alignSelf: 'center',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: normalizeSize(20, 'height'),
  },
  textContainer: {
    position: 'absolute',
    width: normalizeSize(width * 0.5, 'width'),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingStart: normalizeSize(28, 'width'),
    // backgroundColor: COLOR.red,
  },
  text: {
    fontFamily: FontFamily.MilliardBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(16),
    marginBottom: normalizeSize(10, 'height'),
  },
  text1: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.black,
    fontSize: normalizeFontSize(14),
  },
  text2: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(16),
    marginBottom: normalizeSize(10, 'height'),
  },
  text3: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(14),
  },
  bgImage: {
    width: normalizeSize(207, 'width'),
    height: normalizeSize(146, 'width'),
    resizeMode: 'cover',
    alignSelf: 'flex-end',
  },
  button: {
    width: normalizeSize(width * 0.3, 'width'),
    paddingVertical: normalizeSize(10, 'height'),
    alignSelf: 'flex-start',
    marginTop: normalizeSize(20, 'height'),
  },
});

export default styles;
