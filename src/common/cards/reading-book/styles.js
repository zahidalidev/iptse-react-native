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
    flexDirection: 'row',
    width: normalizeSize(width * 0.85, 'width'),
    borderRadius: normalizeSize(10, 'width'),
    backgroundColor: COLOR.white,
    alignItems: 'flex-start',
    elevation: 1,
  },
  text: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(16),
    marginTop: normalizeSize(15, 'height'),
    paddingStart: normalizeSize(10, 'width'),
  },
  text1: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.black,
    fontSize: normalizeFontSize(14),
  },
  text2: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(16),
    marginBottom: normalizeSize(10, 'height'),
  },
  text3: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(14),
  },
  text4: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(18),
  },
  imageContainer: {
    width: '30%',
  },
  textContainer: {
    width: '70%',
  },
  image: {
    width: normalizeSize(100, 'width'),
    height: normalizeSize(100, 'width'),
    resizeMode: 'cover',
    borderRadius: normalizeSize(10, 'width'),
    // alignSelf: 'flex-end',
  },
  button: {
    width: normalizeSize(width * 0.3, 'width'),
    paddingVertical: normalizeSize(10, 'height'),
    alignSelf: 'flex-start',
    marginTop: normalizeSize(20, 'height'),
  },
});

export default styles;
