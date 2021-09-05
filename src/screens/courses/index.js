import React, {useEffect} from 'react';
import {View, FlatList, TouchableWithoutFeedback} from 'react-native';
import {CourseCard} from '../../common';
import {Log} from '../../utils/util';
import styles from './styles';
import * as CoursesActions from '../../redux/actions/CoursesActions';
import * as PacksActions from '../../redux/actions/PacksActions';
import {useDispatch, useSelector} from 'react-redux';
import {COURSE_DETAIL_ROUTE} from '../../navigation/nav-keys';

const CoursesPage = props => {
  const dispatch = useDispatch();
  const packs = useSelector(state => state.Packs.data);
  Log('[CoursesPage - packs -]', JSON.stringify(packs));

  useEffect(async () => {
    dispatch(CoursesActions.GetAllCoursesRequestAsync({}));
    dispatch(PacksActions.GetAllPacksRequestAsync({}));
  }, []);

  const onViewDetailsClickListener = id => {
    props.navigation.navigate(COURSE_DETAIL_ROUTE, {courseId: id});
  };

  const renderItem = (item, i) => {
    return (
      <View>
        <View style={styles.separator} />
        <CourseCard
          item={item}
          onViewDetailsClickListener={onViewDetailsClickListener}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={packs}
        renderItem={({item, index}) => renderItem(item, index)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CoursesPage;
