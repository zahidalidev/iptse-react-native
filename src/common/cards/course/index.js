import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {Button} from '../../../common';
import {COURSE_DETAIL_ROUTE} from '../../../navigation/nav-keys';
import APP_CONSTANT from '../../../constants/AppConstants';

const CourseCard = props => {
  const {inProgress = false, item = {}, onViewDetailsClickListener} = props;
  const {name, description, _id, signedUrl, courses = [], price} = item;
  const [expand, setExpand] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(-1);

  const cardBannerImage = signedUrl
    ? {uri: signedUrl}
    : require('../../../../assets/webinar2.png');

  const onClickListener = () => {
    //TODO: Create Account by calling API
    if (inProgress) {
      // props.navigation.navigate(COURSE_DETAIL_ROUTE, {courseId: _id});
    }
  };

  const toggleExpand = () => {
    setExpand(!expand);
  };

  // const onViewDetailsClickListener = () => {
  //   // props.navigation.navigate(COURSE_DETAIL_ROUTE, {courseId: _id});
  // };

  const onBuyClickListener = () => {
    //
  };

  const renderInProgressView = (date, time) => {
    return (
      <View style={styles.inProgressViewContainer}>
        <Text style={styles.text4}>
          <Text style={styles.text5}>45%</Text> out of 240 page completed
        </Text>
        <View style={styles.baseProgressContainer}>
          <View style={styles.progressContainer} />
        </View>
      </View>
    );
  };

  const renderPackOfThreeView = label => {
    return (
      <View style={styles.timeContainer}>
        <Image
          source={require('../../../../assets/notebook.png')}
          style={styles.book}
        />
        <Text style={styles.text2}>{name}</Text>
      </View>
    );
  };

  if (expand) {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Image
              source={require('../../../../assets/notebook.png')}
              style={styles.book}
            />
            <Text>{name}</Text>
          </View>
          <TouchableWithoutFeedback onPress={toggleExpand}>
            <Text style={styles.text5}>Show Less</Text>
          </TouchableWithoutFeedback>
        </View>
        {courses &&
          courses.map(course => {
            const {description: courseDescription} = course;
            return (
              <View>
                <View style={styles.separator} />
                <View style={[styles.courseContainer]}>
                  <Image source={cardBannerImage} style={styles.image1} />
                  <View
                    style={[
                      styles.infoContainer,
                      {width: '90%', alignSelf: 'center'},
                    ]}>
                    <View style={styles.infoLeftContainer}>
                      <Text style={styles.text}>{courseDescription}</Text>
                    </View>
                    <View style={styles.infoRightContainer}>
                      <Button
                        label={inProgress ? 'Read Now' : 'Buy'}
                        onPress={onClickListener}
                        style={styles.button}
                      />
                    </View>
                  </View>
                  {renderInProgressView()}
                </View>
                <View style={styles.separator} />
              </View>
            );
          })}
        <Button
          label={APP_CONSTANT.buyForText.replace('{rs}', price)}
          onPress={onBuyClickListener}
        />
        <View style={styles.separator} />
        <Button
          label={APP_CONSTANT.viewDetailsText}
          onPress={() => onViewDetailsClickListener(_id)}
          style={styles.button1}
          textStyle={styles.text6}
        />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={toggleExpand}>
      <View style={styles.container}>
        <Image source={cardBannerImage} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.infoLeftContainer}>
            <Text style={styles.text}>{description}</Text>
          </View>
          <View style={styles.infoRightContainer}>
            <Button
              label={inProgress ? 'Read Now' : 'Buy'}
              onPress={onClickListener}
              style={styles.button}
            />
          </View>
        </View>
        {inProgress ? renderInProgressView() : renderPackOfThreeView()}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CourseCard;
