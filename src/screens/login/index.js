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
import { Button, Input, RadioButton } from '../../common';

import {
  Log,
  validateEmail,
  validatePhone,
  validateText,
} from '../../utils/util';
import { REGISTER_ROUTE } from '../../navigation/nav-keys';

const SignInPage = props => {
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState(null);
  const [countryCode, setCountryCode] = React.useState('FR')
  const [country, setCountry] = React.useState(null)

  const onValidatePhone = () => {
    const result = validatePhone(phone);
    setPhoneError(result);
  };

  const onSignInClickListener = () => {
    if (isValid()) {
      Log('[CreateAccount]- phone-', country.callingCode[0] + phone);
      //TODO: Create Account by calling API
    }
  };

  const onSignUpClickListener = () => {
    props.navigation.navigate(REGISTER_ROUTE);
  };

  const isValid = () => {
    const phoneResult = validatePhone(phone);
    setPhoneError(phoneResult);
    return !phoneResult;
  };

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.image}
        />
        <Text style={styles.text1}>{APP_CONSTANT.welcomeBackText}</Text>
        <Text style={styles.text2}>{APP_CONSTANT.loginToYourAccountText}</Text>
      </View>
      <View style={styles.formContainer}>

        <Input
          label={APP_CONSTANT.mobileNumberText}
          placeholder="phone"
          countryCode={countryCode}
          onSelect={onSelect}
          country={true}
          value={phone}
          keyboardType="numeric"
          error={phoneError}
          onBlur={() => onValidatePhone()}
          onChangeText={text => setPhone(text)}
        />
        <Button
          label={APP_CONSTANT.signInText}
          onPress={onSignInClickListener}
        />
        {/* <Text style={[styles.text2, styles.mt]}>
          {APP_CONSTANT.forgotYourPasswordText}
        </Text> */}
        <Text style={[styles.text2, styles.mt]}>
          {APP_CONSTANT.dontHaveAnAccountText}
          <Text style={styles.text3} onPress={onSignUpClickListener}>
            {APP_CONSTANT.signUpText}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignInPage;
