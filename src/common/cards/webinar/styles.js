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
    width: normalizeSize(width * 0.6, 'width'),
    borderRadius: normalizeSize(10, 'width'),
    backgroundColor: COLOR.white,
    alignItems: 'flex-start',
    // justifyContent: 'center',
    paddingBottom: normalizeSize(20, 'height'),
    elevation: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingStart: normalizeSize(10, 'width'),
    marginTop: normalizeSize(15, 'height'),
    // backgroundColor: COLOR.red,
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
  image: {
    width: '100%',
    height: normalizeSize(160, 'height'),
    resizeMode: 'cover',
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
