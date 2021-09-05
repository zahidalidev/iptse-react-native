import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../../constants/AppConstants';
import {Button} from '../../../common';

const ProfileCard = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pack A- Laws of Thermodynamics</Text>
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <Text style={styles.text1}>{APP_CONSTANT.dateText}</Text>
        <Text style={styles.text2}>21 July 2021</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text1}>{APP_CONSTANT.invoiceText}</Text>
        <Text style={styles.text2}>#123383234532</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text1}>{APP_CONSTANT.amountText}</Text>
        <Text style={styles.text2}>INR 699</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text1}>{APP_CONSTANT.gstText}</Text>
        <Text style={styles.text2}>INR 20</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.text1, styles.text3]}>
          {APP_CONSTANT.totalText}
        </Text>
        <Text style={[styles.text2, styles.text3]}>INR 719</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text1}>{APP_CONSTANT.statusText}</Text>
        <Text style={[styles.text2, styles.orangeText]}>pending</Text>
      </View>
    </View>
  );
};

export default ProfileCard;
