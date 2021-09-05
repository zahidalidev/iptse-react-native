import React from 'react';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../constants/AppConstants';
import {Button, Input, RadioButton} from '../../common';
import {
  Log,
  validateEmail,
  validatePhone,
  validateText,
} from '../../utils/util';

const ForgotPasswordPage = props => {
  const [phone, setPhone] = React.useState(null);
  const [phoneError, setPhoneError] = React.useState(null);

  const onValidatePhone = () => {
    const result = validatePhone(phone);
    setPhoneError(result);
  };

  const onSendClickListener = () => {
    if (isValid()) {
      Log('[CreateAccount]- phone-', phone);
      //TODO: Create Account by calling API
    }
  };

  const isValid = () => {
    const phoneResult = validatePhone(phone);
    setPhoneError(phoneResult);
    return !phoneResult;
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconBaseContainer}>
          <Image
            source={require('../../../assets/lock.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text1}>{APP_CONSTANT.forgotPasswordText}</Text>
        <Text style={styles.text2}>
          {APP_CONSTANT.pleaseEnterMobileNumberText}
        </Text>
        <Input
          label={APP_CONSTANT.mobileNumberText}
          placeholder="phone"
          value={phone}
          error={phoneError}
          onBlur={() => onValidatePhone()}
          onChangeText={text => setPhone(text)}
        />
        <Button label={APP_CONSTANT.sendText} onPress={onSendClickListener} />
      </View>
      <View style={styles.backContainer}>
        <Text style={styles.text3}>{APP_CONSTANT.backToLoginText}</Text>
      </View>
    </View>
  );
};

export default ForgotPasswordPage;
