import React, { useEffect } from 'react';
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
import { Button, Input, Loader, RadioButton } from '../../common';
import {
  Log,
  notifyMessage,
  validateEmail,
  validatePhone,
  validateText,
} from '../../utils/util';
import { LOGIN_ROUTE, VERIFY_MOBILE_ROUTE } from '../../navigation/nav-keys';
import * as SignUpActions from '../../redux/actions/SignUpActions';
import * as SignInActions from '../../redux/actions/SignInActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const CreateAccountPage = props => {
  const dispatch = useDispatch();
  const [studentType, setStudentType] = React.useState(
    APP_CONSTANT.schoolStudentText1,
  );
  const [selectedStudentType, setSelectedStudentType] = React.useState(0);
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState("");
  const [organisation, setOrganisation] = React.useState(null);
  const [nameError, setNameError] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const [phoneError, setPhoneError] = React.useState(null);
  const [organisationError, setOrganisationError] = React.useState(null);
  const [countryCode, setCountryCode] = React.useState('FR')
  const [country, setCountry] = React.useState(null)

  const signUpData = useSelector(state => state.SignUp.data);
  const requesting = useSelector(state => state.SignUp.isRequesting);

  const onClickSelectStudentTypeListener = index => {
    setSelectedStudentType(index);
    switch (index) {
      case 0:
        setStudentType(APP_CONSTANT.schoolStudentText1);
        break;
      case 1:
        setStudentType(APP_CONSTANT.collegeStudentText1);
        break;
      case 2:
        setStudentType(APP_CONSTANT.facultyWorkingProfStartupText);
        break;
    }
  };

  const onValidateName = () => {
    const result = validateText(name);
    setNameError(result);
  };

  const onValidateEmail = () => {
    const result = validateEmail(email);
    setEmailError(result);
  };
  const onValidatePhone = () => {
    const result = validatePhone(phone);
    setPhoneError(result);
  };

  const onValidateOrganisation = () => {
    const result = validateText(organisation);
    setOrganisationError(result);
  };

  const onSignUpClickListener = () => {
    if (isValid()) {
      Log('[CreateAccount]- student Type-', studentType);
      Log('[CreateAccount]- name-', name);
      Log('[CreateAccount]- email-', email);
      Log('[CreateAccount]- phone-', phone);
      Log('[CreateAccount]- organisation-', organisation);

      const data = {
        email: email,
        name: name,
        phone: phone,
        type: studentType,
        registerFor: 'EXAM',
      };
      notifyMessage(JSON.stringify(data));
      Log('[CreateAccount]- data-', JSON.stringify(data));
      dispatch(SignUpActions.SignUpRequestAsync(data));
    }
  };

  const onSignInPressClickListener = () => {
    props.navigation.navigate(LOGIN_ROUTE);
  };

  const isValid = () => {
    const nameResult = validateText(name);
    setNameError(nameResult);
    const emailResult = validateEmail(email);
    setEmailError(emailResult);
    const phoneResult = validatePhone(phone);
    setPhoneError(phoneResult);
    const orgResult = validateText(organisation);
    setOrganisationError(orgResult);
    return !nameResult && !emailResult && !phoneResult && !orgResult;
  };

  const onChangeName = text => {
    setName(text);
  };

  const onChangeEmail = text => {
    setEmail(text);
  };

  const onChangePhone = text => {
    setPhone(text);
  };

  const onChangeOrganisation = text => {
    setOrganisation(text);
  };

  useEffect(() => {
    if (signUpData) {
      const { otp } = signUpData;
      notifyMessage(JSON.stringify(signUpData));
      if (otp) {
        const data = { phone: phone, otp: otp };
        dispatch(SignInActions.SignInRequestAsync(data));
      }
    }
  }, [signUpData]);

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Loader loading={requesting} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.image}
        />
        <Text style={styles.text1}>{APP_CONSTANT.createAccountText}</Text>
        <Text style={styles.text2}>{APP_CONSTANT.signUpToYourAccountText}</Text>
        <View style={styles.studentTypesContainer}>
          <View style={styles.itemContainer}>
            <RadioButton
              label={APP_CONSTANT.schoolStudentText}
              onPress={() => onClickSelectStudentTypeListener(0)}
              active={selectedStudentType === 0}
            />
          </View>
          <View style={styles.itemContainer}>
            <RadioButton
              label={APP_CONSTANT.collegeStudentText}
              onPress={() => onClickSelectStudentTypeListener(1)}
              active={selectedStudentType === 1}
            />
          </View>
        </View>
        <View style={styles.itemContainer1}>
          <RadioButton
            label={APP_CONSTANT.facultyWorkingProfStartupText}
            onPress={() => onClickSelectStudentTypeListener(2)}
            active={selectedStudentType === 2}
          />
        </View>
        <Input
          label={APP_CONSTANT.StudentNameText}
          placeholder="student name"
          value={name}
          error={nameError}
          onBlur={() => onValidateName()}
          onChangeText={onChangeName}
        />
        <Input
          label={APP_CONSTANT.enterEmailText}
          placeholder="email"
          value={email}
          error={emailError}
          onBlur={() => onValidateEmail()}
          onChangeText={onChangeEmail}
        />
        <Input
          countryCode={countryCode}
          onSelect={onSelect}
          country={true}
          label={APP_CONSTANT.phoneNumberText}
          placeholder="phone"
          keyboardType="numeric"
          value={phone}
          error={phoneError}
          onBlur={() => onValidatePhone()}
          onChangeText={onChangePhone}
        />
        <Input
          label={APP_CONSTANT.organisationNameText}
          placeholder="organisation name"
          value={organisation}
          error={organisationError}
          onBlur={() => onValidateOrganisation()}
          onChangeText={onChangeOrganisation}
        />
        <Button
          label={APP_CONSTANT.signUpText}
          onPress={onSignUpClickListener}
        />
        <Text style={[styles.text2, styles.mt]}>
          {APP_CONSTANT.alredyHaveAnAccountText}
          <Text style={styles.text3} onPress={onSignInPressClickListener}>
            {APP_CONSTANT.signInText}
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CreateAccountPage;
