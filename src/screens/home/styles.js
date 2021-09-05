import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../utils/color';
import {FontFamily, normalizeFontSize, normalizeSize} from '../../utils/util';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    flexDirection: 'column',
  },
  iconContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBaseContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: normalizeSize(170, 'width'),
    height: normalizeSize(170, 'width'),
    borderRadius: 85,
    backgroundColor: COLOR.gray2,
  },
  backContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: normalizeSize(100, 'width'),
    height: normalizeSize(100, 'width'),
    alignSelf: 'center',
  },
  text1: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(24),
    alignSelf: 'center',
    marginTop: normalizeSize(20, 'height'),
  },
  text2: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(14),
    alignSelf: 'center',
    lineHeight: normalizeFontSize(30),
    textAlign: 'center',
  },
  text3: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.darkGreen,
    fontSize: normalizeFontSize(14),
  },
  sectionContainer: {
    flexDirection: 'row',
    width: normalizeSize(width * 0.9, 'width'),
    paddingVertical: normalizeSize(15, 'height'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text5: {
    fontFamily: FontFamily.MilliardBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(20),
  },
  text6: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(12),
  },
  separator: {
    height: normalizeSize(20, 'height'),
  },
});

export default styles;
