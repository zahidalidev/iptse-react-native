import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../../constants/AppConstants';
import {Button} from '../../../common';
import {
  getWebinarDate,
  getWebinarEndTime,
  getWebinarStartTime,
} from '../../../utils/util';

const WebinarCard = props => {
  const {name, description, startDate, endDate, signedUrl} = props?.item;
  const bannerImage = signedUrl
    ? {uri: signedUrl}
    : require('../../../../assets/webinar-dummy.png');
  return (
    <View style={styles.container}>
      <Image source={bannerImage} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.text2}>{getWebinarDate(startDate)}</Text>
        <Text style={styles.text4}>
          {'  '}|{'  '}
        </Text>
        <Text style={styles.text2}>{`${getWebinarStartTime(
          startDate,
        )} - ${getWebinarEndTime(endDate)}`}</Text>
      </View>
    </View>
  );
};

export default WebinarCard;
