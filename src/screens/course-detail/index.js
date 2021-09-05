import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Button, SectionHeader, WebinarCard2} from '../../common';
import styles from './styles';
import * as CoursesActions from '../../redux/actions/CoursesActions';
import {useDispatch, useSelector} from 'react-redux';
import {Log} from '../../utils/util';
import APP_CONSTANT from '../../constants/AppConstants';

const CourseDetailPage = props => {
  const dispatch = useDispatch();
  const {courseId} = props?.route?.params;
  const course = useSelector(state => state.Courses.course);
  Log('[CoursePage - course-11 -]', JSON.stringify(course));

  useEffect(async () => {
    dispatch(CoursesActions.GetCourseRequestAsync({courseId}));
  }, []);

  const renderCourseItem = props => {
    const [showDetail, setShowDetail] = React.useState(false);
    const arrowStyle = showDetail ? styles.arrowUp : styles.arrowDown;
    const toggleShowDetail = () => {
      setShowDetail(!showDetail);
    };

    return (
      <View style={styles.courseItemContainer}>
        <View style={styles.courseInnerItemContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../../assets/webinar2.png')}
              style={styles.image2}
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.infoContainer}>
              <Text>Basics of Thermodynamics</Text>
              <TouchableOpacity onPress={toggleShowDetail}>
                <Image
                  source={require('../../../assets/up-arrow.png')}
                  style={[arrowStyle]}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.baseProgressContainer}>
              <View style={styles.progressContainer} />
            </View>
          </View>
        </View>
        {showDetail && renderDetailView()}
      </View>
    );
  };

  const renderDetailView = data => {
    return (
      <View style={styles.detailContainer}>
        <Text style={styles.text2}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some
        </Text>
        <View style={styles.coursePagesAndTimeContainer}>
          <Text style={styles.text2}>Pages</Text>
          <Text style={styles.text4}>25 Pages</Text>
        </View>
        <View style={styles.coursePagesAndTimeContainer}>
          <Text style={styles.text2}>Time</Text>
          <Text style={styles.text4}>20 min</Text>
        </View>
        <Button
          label={APP_CONSTANT.continueReadingText}
          onPress={onContinueReadingClickListener}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    );
  };

  const onContinueReadingClickListener = () => {
    //
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../../../assets/webinar2.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.text1}>
        Connect VPN in 5 easy steps with proxy servers
      </Text>
      <Text style={styles.text2}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some, but the majority have
        suffered alteration in some.
      </Text>
      <Text style={styles.text3}>Details</Text>
      {renderCourseItem()}
    </ScrollView>
  );
};

export default CourseDetailPage;
