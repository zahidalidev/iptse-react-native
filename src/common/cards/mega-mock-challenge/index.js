import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../../constants/AppConstants';
import {Button} from '../../../common';
import {Log} from '../../../utils/util';

const MegaMockChallengeCard = props => {
  const onRegisterClickListener = () => {
    //TODO: Create Account by calling API
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{APP_CONSTANT.megaMockChallenge}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text1}>
          {APP_CONSTANT.realTimeExamExperienceText}
        </Text>
        <Image
          source={require('../../../../assets/ic_clock.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text1}>
          {APP_CONSTANT.realTimeExamExperienceText}
        </Text>
        <Image
          source={require('../../../../assets/ic_competition.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text1}>
          {APP_CONSTANT.realTimeExamExperienceText}
        </Text>
        <Image
          source={require('../../../../assets/ic_result.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.divider} /> */}
      <Text style={styles.text3}>{APP_CONSTANT.iptseAssessmentExamText}</Text>
      <View style={styles.assessmentContainer}>
        <View style={styles.assessmentLeftContainer}>
          <Text style={styles.text4}>80 Questions</Text>
        </View>
        <View style={styles.assessmentMidContainer}>
          <Text style={styles.text4}>80 Marks</Text>
        </View>
        <View style={styles.assessmentRightContainer}>
          <Text style={styles.text4}>90 Mins</Text>
        </View>
      </View>
      <Button
        label={APP_CONSTANT.registerText}
        onPress={onRegisterClickListener}
        style={styles.button}
      />
      <Text style={styles.text5}>12392+ students have already registered</Text>
    </View>
  );
};

export default MegaMockChallengeCard;
