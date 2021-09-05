import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../constants/AppConstants';
import {Button, ProfileCard, SupportCard} from '../../common';
import {PROFILE_EDIT_ROUTE} from '../../navigation/nav-keys';

const ProfilePage = props => {
  const onLogOutClickListener = () => {
    //
  };

  const onClickEditProfileClickListener = () => {
    props?.navigation.navigate(PROFILE_EDIT_ROUTE);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={onClickEditProfileClickListener}>
        <Image
          source={require('../../../assets/man.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text1}>John Smith</Text>
      <Text style={styles.text2}>johnsmith@gmail.com</Text>
      <Text style={styles.text3}>My Orders</Text>
      <ProfileCard />
      <View style={styles.separator} />
      <ProfileCard />
      <View style={styles.separator} />
      <SupportCard />
      <Button
        label={APP_CONSTANT.logOutText}
        onPress={onLogOutClickListener}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </ScrollView>
  );
};

export default ProfilePage;
