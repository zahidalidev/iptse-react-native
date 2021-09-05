import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../../constants/AppConstants';
import {Button} from '../../../common';

const ReadingBookCard = props => {
  const {name, description, _id, signedUrl, courses = [], price} = props?.item;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../assets/reading-book-dummy.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

export default ReadingBookCard;
