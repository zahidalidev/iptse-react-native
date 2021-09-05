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
    width: normalizeSize(width * 0.85, 'width'),
    borderRadius: normalizeSize(10, 'width'),
    backgroundColor: COLOR.white,
    alignItems: 'flex-start',
    elevation: 0.5,
    padding: normalizeSize(20, 'width'),
    alignSelf: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(16),
    marginTop: normalizeSize(15, 'height'),
    // paddingStart: normalizeSize(10, 'width'),
  },
  text1: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(12),
    marginTop: normalizeSize(15, 'height'),
  },
  text2: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.black,
    fontSize: normalizeFontSize(12),
    marginTop: normalizeSize(15, 'height'),
  },
  text3: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(14),
  },
  orangeText: {
    color: COLOR.orange,
  },
  greenText: {
    color: COLOR.lightGreen,
  },
  divider: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray3,
    marginTop: normalizeSize(22, 'height'),
    alignSelf: 'center',
  },
});

export default styles;
