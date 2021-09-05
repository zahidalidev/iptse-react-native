import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../../constants/AppConstants';
import {Button} from '../..';

const SupportCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text2}>abc@exampleemail.com</Text>
        <Image
          source={require('../../../../assets/ic_envelop.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default SupportCard;
