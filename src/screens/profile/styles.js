import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../utils/color';
import {FontFamily, normalizeFontSize, normalizeSize} from '../../utils/util';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageContainer: {
    width: normalizeSize(100, 'width'),
    height: normalizeSize(100, 'width'),
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLOR.orange,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: normalizeSize(50, 'width'),
    height: normalizeSize(50, 'width'),
    alignSelf: 'center',
  },
  text1: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(16),
    alignSelf: 'center',
    marginTop: normalizeSize(18, 'height'),
  },
  text2: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(13),
    textAlign: 'center',
  },
  text3: {
    fontFamily: FontFamily.MilliardBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(18),
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: normalizeSize(65, 'height'),
    marginBottom: normalizeSize(20, 'height'),
    paddingHorizontal: normalizeSize(25, 'width'),
  },
  text4: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.darkGreen,
    fontSize: normalizeFontSize(14),
    textDecorationLine: 'underline',
    marginTop: normalizeSize(30, 'height'),
  },
  separator: {
    height: normalizeSize(20, 'height'),
  },
  button: {
    borderWidth: 1,
    borderColor: COLOR.orange,
    width: normalizeSize(width * 0.3, 'width'),
    backgroundColor: COLOR.white,
    paddingVertical: normalizeSize(15, 'height'),
    marginVertical: normalizeSize(30, 'height'),
  },
  buttonText: {
    color: COLOR.orange,
  },
});

export default styles;
