import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../../constants/AppConstants';
import {Button} from '../../../common';

const EnrollNowCard = props => {
  const onEnrollClickListener = () => {
    if (isValid()) {
      Log('[CreateAccount]- phone-', phone);
      //TODO: Create Account by calling API
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/virtual-reality.png')}
        style={styles.bgImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{APP_CONSTANT.indiasBiggestText}</Text>
        <Text style={styles.text}>{APP_CONSTANT.ipOlympiadExamText}</Text>
        <Text style={styles.text3}>{APP_CONSTANT.studentRegisteredText}</Text>
        <Button
          label={APP_CONSTANT.enrollNowText}
          onPress={onEnrollClickListener}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default EnrollNowCard;
