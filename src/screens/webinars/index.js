import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SectionList,
  TouchableWithoutFeedback,
} from 'react-native';
import {SectionHeader, WebinarCard2} from '../../common';
import styles from './styles';
import * as WebinarActions from '../../redux/actions/WebinarsActions';
import {useDispatch, useSelector} from 'react-redux';
import {getToken, Log, storeToken, transformDataSet} from '../../utils/util';
import {WEBINAR_DETAIL_ROUTE} from '../../navigation/nav-keys';

const WebinarsPage = props => {
  const dispatch = useDispatch();
  const webinars = useSelector(state => state.Webinar.data);
  const loginData = useSelector(state => state.SignIn.data);
  Log('[WebinarsPage - webinars -]', JSON.stringify(webinars));

  useEffect(async () => {
    const token = await getToken();
    if (!token) {
      await storeToken(loginData.accessToken);
    }
    dispatch(WebinarActions.GetAllWebinarsRequestAsync({}));
  }, []);

  const onWebnarClickListener = (item, i) => {
    props.navigation.navigate(WEBINAR_DETAIL_ROUTE, {webinarId: item?.id});
  };

  const renderItem = (item, i) => {
    return (
      <TouchableWithoutFeedback onPress={() => onWebnarClickListener(item, i)}>
        <View>
          <View style={styles.separator} />
          <WebinarCard2 item={item} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionList
        sections={transformDataSet(webinars)}
        renderItem={({item, index}) => renderItem(item, index)}
        renderSectionHeader={({section: {title}}) => (
          <SectionHeader label={title} showViewAll={false} />
        )}
      />
    </ScrollView>
  );
};

export default WebinarsPage;
