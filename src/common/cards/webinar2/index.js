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

const WebinarCard2 = props => {
  const {isCompleted = false, item = {}} = props;
  const {name, description, startDate, endDate, signedUrl} = item;
  const onClickListener = () => {
    //TODO: Create Account by calling API
  };

  const renderDateTime = (date, time) => {
    //
  };

  const renderCompletedStatus = label => {};

  return (
    <View style={styles.container}>
      <Image source={{uri: signedUrl}} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.infoLeftContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.infoRightContainer}>
          <Button
            label={isCompleted ? 'Certificates' : 'Register'}
            onPress={onClickListener}
            style={styles.button}
          />
        </View>
      </View>
      {isCompleted ? (
        <Text style={styles.text5}>Completed</Text>
      ) : (
        <View style={styles.timeContainer}>
          <Text style={styles.text2}>{getWebinarDate(startDate)}</Text>
          <Text style={styles.text4}>
            {'  '}|{'  '}
          </Text>
          <Text style={styles.text2}>{`${getWebinarStartTime(
            startDate,
          )} - ${getWebinarEndTime(endDate)}`}</Text>
        </View>
      )}
    </View>
  );
};

export default WebinarCard2;
