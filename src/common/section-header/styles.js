import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../utils/color';
import {FontFamily, normalizeFontSize, normalizeSize} from '../../utils/util';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
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
});

export default styles;
