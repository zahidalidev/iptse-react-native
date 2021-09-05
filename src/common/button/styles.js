import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily, normalizeFontSize, normalizeSize} from '../../utils/util';
import COLOR from '../../utils/color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: normalizeSize(width * 0.8, 'width'),
    borderRadius: normalizeSize(10, 'width'),
    paddingVertical: normalizeSize(15, 'width'),
    backgroundColor: COLOR.orange,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.white,
    fontSize: normalizeFontSize(16),
  },
});

export default styles;
