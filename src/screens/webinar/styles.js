import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../utils/color';
import {FontFamily, normalizeFontSize, normalizeSize} from '../../utils/util';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  bannerContainer: {
    width: width,
    height: normalizeSize(250),
    borderBottomLeftRadius: normalizeSize(15),
    borderBottomRightRadius: normalizeSize(15),
  },
  detailsContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray1,
    paddingVertical: normalizeSize(10),
  },
  buttonContainer: {
    paddingVertical: normalizeSize(40),
    alignSelf: 'center',
  },
  text: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.orange2,
    fontSize: normalizeFontSize(18),
    marginTop: normalizeSize(10, 'height'),
    textAlign: 'left',
    paddingHorizontal: normalizeSize(10),
  },
  text1: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(24),
    marginVertical: normalizeSize(20, 'height'),
    textAlign: 'left',
    paddingHorizontal: normalizeSize(10),
  },
  text2: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(14),
    lineHeight: normalizeFontSize(25),
    textAlign: 'left',
    paddingHorizontal: normalizeSize(10),
  },
  text3: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.black,
    fontSize: normalizeFontSize(16),
    paddingHorizontal: normalizeSize(10),
    marginVertical: normalizeSize(20, 'height'),
  },
  text4: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.black,
    fontSize: normalizeFontSize(14),
    paddingHorizontal: normalizeSize(10),
  },
  codeContainer: {
    width: normalizeSize(width * 0.4, 'width'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalizeSize(57, 'height'),
  },
  separator: {
    height: normalizeSize(20, 'height'),
  },
  image: {
    width: width,
    height: normalizeSize(250),
    borderBottomLeftRadius: normalizeSize(18),
    borderBottomRightRadius: normalizeSize(18),
  },
});

export default styles;
