import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../constants/AppConstants';
import {Button, IconInput} from '../../common';
import {Log, notifyMessage, validatePhone} from '../../utils/util';

const ProfileEditPage = props => {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [university, setUniversity] = React.useState(null);

  const onSaveChangesClickListener = () => {
    //
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/man.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.separator} />
      <IconInput
        icon={require('../../../assets/ic_user.png')}
        onChangeText={text => setName(text)}
        placeholder={APP_CONSTANT.nameText}
      />
      <IconInput
        icon={require('../../../assets/ic_envelop.png')}
        onChangeText={text => setEmail(text)}
        placeholder={APP_CONSTANT.emailText}
      />
      <IconInput
        icon={require('../../../assets/ic_phone.png')}
        onChangeText={text => setPhone(text)}
        placeholder={APP_CONSTANT.phoneText}
      />
      <IconInput
        icon={require('../../../assets/ic_university.png')}
        onChangeText={text => setUniversity(text)}
        placeholder={APP_CONSTANT.universityText}
      />
      <Button
        label={APP_CONSTANT.saveChangesText}
        onPress={onSaveChangesClickListener}
      />
    </ScrollView>
  );
};

export default ProfileEditPage;
