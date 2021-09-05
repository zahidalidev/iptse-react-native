import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../constants/AppConstants';
import {
  EnrollNowCard,
  MegaMockChallengeCard,
  ReadingBookCard,
  SectionHeader,
  WebinarCard,
} from '../../common';
import * as WebinarActions from '../../redux/actions/WebinarsActions';
import * as PacksActions from '../../redux/actions/PacksActions';
import {useDispatch, useSelector} from 'react-redux';
import {WEBINAR_DETAIL_ROUTE} from '../../navigation/nav-keys';

const HomePage = props => {
  const dispatch = useDispatch();
  const webinars = useSelector(state => state.Webinar.data);
  const packs = useSelector(state => state.Packs.data);

  React.useEffect(() => {
    dispatch(WebinarActions.GetAllWebinarsRequestAsync({}));
    dispatch(PacksActions.GetAllPacksRequestAsync({}));
  }, []);

  const onWebinarClickListener = item => {
    props.navigation.navigate(WEBINAR_DETAIL_ROUTE, {webinarId: item?.id});
  };

  const renderWebinarItem = (item, index) => {
    return (
      <TouchableWithoutFeedback onPress={() => onWebinarClickListener(item)}>
        <View style={{marginHorizontal: 10, paddingVertical: 10}}>
          <WebinarCard item={item} />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderReadingBookItem = (item, index) => {
    return (
      <View style={{marginVertical: 10, paddingBottom: 10}}>
        <ReadingBookCard item={item} />
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.separator} />
      <EnrollNowCard />
      <SectionHeader label={APP_CONSTANT.upcomingWebinarsText} />
      <FlatList
        data={webinars}
        renderItem={({item, index}) => renderWebinarItem(item, index)}
        horizontal
      />
      <SectionHeader label={APP_CONSTANT.readingBooksText} />
      {packs?.map(e => renderReadingBookItem(e))}
      <MegaMockChallengeCard />
    </ScrollView>
  );
};

export default HomePage;
