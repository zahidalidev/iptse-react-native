import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import * as WebinarActions from '../../redux/actions/WebinarsActions';
import {useDispatch, useSelector} from 'react-redux';
import {
  getWebinarDate,
  getWebinarEndTime,
  getWebinarStartTime,
  Log,
} from '../../utils/util';
import APP_CONSTANTS from '../../constants/AppConstants';
import {Button} from '../../common';

const WebinarPage = props => {
  const dispatch = useDispatch();
  const {webinarId} = props?.route?.params;
  const webinar = useSelector(state => state.Webinar.webinar);
  Log('[WebinarPage - webinar -]', JSON.stringify(webinar));

  useEffect(async () => {
    dispatch(WebinarActions.GetWebinarInfoRequestAsync({webinarId}));
  }, []);

  const onRegisterClickListener = () => {
    //TODO: Implement Register functionality here.
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={{uri: webinar?.signedUrl}} style={styles.image} />
      </View>
      <Text style={styles.text}>
        {APP_CONSTANTS.earnCertificateAfterCompletionText}
      </Text>
      <Text style={styles.text1}>{webinar?.name}</Text>
      <Text style={styles.text2}>{webinar?.description}</Text>
      <Text style={styles.text3}>{APP_CONSTANTS.details}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.text2}>Date</Text>
        <Text style={styles.text4}>{getWebinarDate(webinar?.startDate)}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.text2}>Time</Text>
        <Text style={styles.text4}>{`${getWebinarStartTime(
          webinar?.startDate,
        )} - ${getWebinarEndTime(webinar?.endDate)}`}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.text2}>Moderator</Text>
        <Text style={styles.text4}>Jon Doe</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <Button
          label={APP_CONSTANTS.registerText}
          onPress={onRegisterClickListener}
        />
      </View>
    </ScrollView>
  );
};

export default WebinarPage;
