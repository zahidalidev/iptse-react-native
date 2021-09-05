import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../utils/color';
import {FontFamily, normalizeFontSize, normalizeSize} from '../../utils/util';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    alignItems: 'center',
  },
  image: {
    width: normalizeSize(125, 'width'),
    height: normalizeSize(128, 'width'),
    alignSelf: 'center',
  },
  text1: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(24),
    alignSelf: 'center',
  },
  text2: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(14),
    alignSelf: 'center',
  },
  text3: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.darkGreen,
    fontSize: normalizeFontSize(14),
  },
  mt: {
    marginTop: normalizeSize(15, 'height'),
  },
  mb: {
    marginBottom: normalizeSize(15, 'height'),
  },
  studentTypesContainer: {
    flexDirection: 'row',
    width: normalizeSize(width * 0.8, 'width'),
    marginTop: 20,
  },
  itemContainer: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  itemContainer1: {
    alignItems: 'flex-start',
    width: normalizeSize(width * 0.8, 'width'),
    marginVertical: 18,
  },
});

export default styles;
