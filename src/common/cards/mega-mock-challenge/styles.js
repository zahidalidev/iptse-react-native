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
    borderRadius: normalizeSize(13, 'width'),
    backgroundColor: COLOR.white,
    alignItems: 'flex-start',
    elevation: 0.5,
    paddingVertical: normalizeSize(37, 'height'),
    paddingHorizontal: normalizeSize(20, 'width'),
  },
  descriptionContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalizeSize(7, 'height'),
  },
  assessmentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: normalizeSize(14, 'height'),
  },
  assessmentLeftContainer: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: COLOR.gray1,
  },
  assessmentMidContainer: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: COLOR.gray1,
  },
  assessmentRightContainer: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(22),
    marginBottom: normalizeSize(24, 'height'),
  },
  text1: {
    fontFamily: FontFamily.MilliardMedium,
    color: COLOR.black,
    fontSize: normalizeFontSize(12),
  },
  text2: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(12),
    marginBottom: normalizeSize(10, 'height'),
  },
  text3: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(14),
    alignSelf: 'center',
  },
  text4: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray4,
    fontSize: normalizeFontSize(12),
  },
  text5: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray4,
    fontSize: normalizeFontSize(12),
    alignSelf: 'center',
    marginTop: normalizeSize(6, 'height'),
  },
  image: {
    width: normalizeSize(24, 'width'),
    height: normalizeSize(32, 'width'),
    resizeMode: 'cover',
    tintColor: COLOR.orange,
  },
  button: {
    width: '100%',
    paddingVertical: normalizeSize(10, 'height'),
    marginTop: normalizeSize(10, 'height'),
  },
  divider: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray3,
    marginTop: normalizeSize(22, 'height'),
  },
});

export default styles;
