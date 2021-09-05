import React, {useEffect} from 'react';
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
import {Button, DigitInput} from '../../common';
import {Log, notifyMessage, validatePhone} from '../../utils/util';
import {useDispatch, useSelector} from 'react-redux';
import * as VerifyMobileActions from '../../redux/actions/VerifyMobileActions';
import * as SignInActions from '../../redux/actions/SignInActions';

const VerifyMobilePage = props => {
  const dispatch = useDispatch();
  const isMobileVerified = useSelector(
    state => state.VerifyMobile.isMobileVerified,
  );
  const [digit1, setDigit1] = React.useState(null);
  const [digit2, setDigit2] = React.useState(null);
  const [digit3, setDigit3] = React.useState(null);
  const [digit4, setDigit4] = React.useState(null);

  const onVerifyClickListener = () => {
    if (isValid()) {
      Log('[VerifyMobilePage]- digit1-', digit1);
      Log('[VerifyMobilePage]- digit2-', digit2);
      Log('[VerifyMobilePage]- digit3-', digit3);
      Log('[VerifyMobilePage]- digit4-', digit4);
      //TODO: Create Account by calling API
      const data = {digit1, digit2, digit3, digit4};
      dispatch(VerifyMobileActions.VerifyMobileRequestAsync(data));
    } else {
      notifyMessage(APP_CONSTANT.pleaseEnterAllDigitText);
    }
  };

  const onResendCodeClickListener = () => {
    //
  };

  const isValid = () => {
    return digit1 && digit2 && digit3 && digit4;
  };

  useEffect(() => {
    if (isMobileVerified) {
      dispatch(SignInActions.SetLoggedIn({isLoggedIn: true}));
    }
  }, [isMobileVerified]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconBaseContainer}>
          <Image
            source={require('../../../assets/verify-mobile.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text1}>{APP_CONSTANT.verifyYourMobileText}</Text>
        <Text style={styles.text2}>
          {APP_CONSTANT.pleaseEnter4DigitCodeText}
        </Text>
        <Text style={styles.text3}>+91-9876543210</Text>
        <View style={styles.codeContainer}>
          <DigitInput value={digit1} onChangeText={text => setDigit1(text)} />
          <DigitInput value={digit2} onChangeText={text => setDigit2(text)} />
          <DigitInput value={digit3} onChangeText={text => setDigit3(text)} />
          <DigitInput value={digit4} onChangeText={text => setDigit4(text)} />
        </View>
        <Text style={styles.text4} onPress={onResendCodeClickListener}>
          {APP_CONSTANT.resendCodeText}
        </Text>
      </View>
      <View style={styles.backContainer}>
        <Button
          label={APP_CONSTANT.verifyText}
          onPress={onVerifyClickListener}
        />
      </View>
    </View>
  );
};

export default VerifyMobilePage;
