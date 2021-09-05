import {
  Dimensions,
  Platform,
  PixelRatio,
  ToastAndroid,
  AlertIOS,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const wscale = SCREEN_WIDTH / 375;
const hscale = SCREEN_HEIGHT / 667;

export const normalizeSize = (size, based = 'width') => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const normalizeFontSize = size => {
  return size / PixelRatio.getFontScale();
};

export const FontFamily = {
  MilliardLight: 'Rene Bieder  Milliard Light',
  MilliardMedium: 'Rene Bieder  Milliard Medium',
  MilliardSemiBold: 'Rene Bieder  Milliard SemiBold',
  MilliardBold: 'Rene Bieder  Milliard Bold',
};

export const validateText = text => {
  let msg = null;
  if (!text || text.length === 0) msg = 'required';
  return msg;
};

export const validatePhone = text => {
  let msg = null;
  if (!text || text.length === 0) {
    msg = 'required';
  } else {
    const regex = /[1-9]{1}[0-9]{9}/;
    const result = text.match(regex);
    if (!result) {
      msg = 'Invalid phone';
    }
  }
  return msg;
};

export const validateEmail = text => {
  let msg = null;
  if (!text || text.length === 0) {
    msg = 'required';
  } else {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(text);
    if (!result) {
      msg = 'Invalid Email';
    }
  }
  return msg;
};

export const Log = (key, msg) => {
  const log = true;
  if (log) {
    console.log(`${key}: ${msg}`);
  }
};

export const notifyMessage = msg => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
};

export const storeToken = async value => {
  try {
    await AsyncStorage.setItem('user_token', value);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('user_token');
  } catch (e) {
    // error reading value
    throw e;
  }
};

export const transformDataSet = (webinars = []) => {
  const webinarsArr = [];
  if (webinars) {
    let upcomingWebinars = [];
    let completedWebinars = [];
    webinars.forEach(el => {
      if (isFutureDate(el.startDate)) {
        upcomingWebinars.push(el);
      } else {
        completedWebinars.push(el);
      }
    });
    webinarsArr.push({title: 'Upcoming Webinars', data: upcomingWebinars});
    webinarsArr.push({title: 'Completed Webinars', data: completedWebinars});
  }
  return webinarsArr;
};

export const getWebinarDate = date => {
  return moment(date).format('MMM DD, YYYY');
};

export const getWebinarStartTime = date => {
  return moment(date).format('hh:mm');
};

export const getWebinarEndTime = date => {
  return moment(date).format('hh:mm');
};

export const isFutureDate = date => {
  return moment(date).isAfter();
};
