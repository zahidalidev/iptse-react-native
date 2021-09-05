import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily, normalizeFontSize, normalizeSize} from '../../utils/util';
import COLOR from '../../utils/color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(16),
    marginStart: normalizeSize(10, 'width'),
  },
  active: {
    alignItems: 'center',
    justifyContent: 'center',
    width: normalizeSize(20, 'width'),
    height: normalizeSize(20, 'width'),
    backgroundColor: COLOR.orange,
    borderRadius: normalizeSize(10, 'width'),
    borderWidth: 1,
    borderColor: COLOR.orange,
    marginTop: normalizeSize(4, 'height'),
  },
  activeInner: {
    width: normalizeSize(10, 'width'),
    height: normalizeSize(10, 'width'),
    backgroundColor: COLOR.white,
    borderRadius: normalizeSize(15, 'width'),
  },
  inactive: {
    width: normalizeSize(20, 'width'),
    height: normalizeSize(20, 'width'),
    backgroundColor: COLOR.gray0,
    borderRadius: normalizeSize(10, 'width'),
    marginTop: normalizeSize(4, 'height'),
  },
});

export default styles;
