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
  bannerContainer: {
    width: width,
    height: normalizeSize(200),
    borderBottomLeftRadius: normalizeSize(15),
    borderBottomRightRadius: normalizeSize(15),
    backgroundColor: COLOR.gray5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseItemContainer: {
    width: normalizeSize(width * 0.9),
    borderRadius: normalizeSize(5),
    backgroundColor: COLOR.white,
    padding: normalizeSize(8),
    elevation: 2,
  },
  courseInnerItemContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  leftContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    width: '100%',
  },
  coursePagesAndTimeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalizeSize(10),
    paddingHorizontal: normalizeSize(10),
  },
  image: {
    width: normalizeSize(161, 'width'),
    height: normalizeSize(167, 'width'),
    alignSelf: 'center',
  },
  image2: {
    width: normalizeSize(100, 'width'),
    height: normalizeSize(100, 'width'),
    alignSelf: 'center',
  },
  arrowUp: {
    transform: [{rotate: '180deg'}],
    width: normalizeSize(30, 'width'),
    height: normalizeSize(30, 'width'),
    alignSelf: 'center',
    tintColor: COLOR.gray0,
  },
  arrowDown: {
    transform: [{rotate: '180deg'}],
    width: normalizeSize(30, 'width'),
    height: normalizeSize(30, 'width'),
    alignSelf: 'center',
    tintColor: COLOR.gray0,
  },
  baseProgressContainer: {
    width: '100%',
    height: 4,
    borderRadius: normalizeSize(4),
    backgroundColor: COLOR.gray1,
    marginHorizontal: normalizeSize(10),
    marginTop: normalizeSize(10),
  },
  progressContainer: {
    position: 'absolute',
    width: '10%',
    height: 4,
    borderRadius: normalizeSize(4),
    backgroundColor: COLOR.orange,
  },
  text1: {
    fontFamily: FontFamily.MilliardSemiBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(24),
    alignSelf: 'center',
    marginTop: normalizeSize(20, 'height'),
    paddingHorizontal: normalizeSize(10),
  },
  text2: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.gray0,
    fontSize: normalizeFontSize(14),
    alignSelf: 'center',
    lineHeight: normalizeFontSize(20),
    textAlign: 'left',
    // marginTop: normalizeSize(20, 'height'),
    paddingHorizontal: normalizeSize(10),
  },
  text3: {
    fontFamily: FontFamily.MilliardBold,
    color: COLOR.black,
    fontSize: normalizeFontSize(16),
    alignSelf: 'flex-start',
    lineHeight: normalizeFontSize(20),
    textAlign: 'left',
    paddingHorizontal: normalizeSize(15),
    marginVertical: normalizeSize(10),
  },
  text4: {
    fontFamily: FontFamily.MilliardLight,
    color: COLOR.black,
    fontSize: normalizeFontSize(14),
    // marginTop: normalizeSize(20, 'height'),
  },
  codeContainer: {
    width: normalizeSize(width * 0.4, 'width'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalizeSize(57, 'height'),
  },
});

export default styles;
