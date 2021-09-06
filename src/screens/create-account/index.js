import React, { useEffect } from 'react';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';
import APP_CONSTANT from '../../constants/AppConstants';
import { Button, Input, Loader, RadioButton } from '../../common';
import LoadingModal from "../../common/LoadingModal"
import {
  Log,
  normalizeSize,
  notifyMessage,
  validateEmail,
  validatePhone,
  validateText,
} from '../../utils/util';
import { LOGIN_ROUTE, VERIFY_MOBILE_ROUTE } from '../../navigation/nav-keys';
import * as SignUpActions from '../../redux/actions/SignUpActions';
import * as SignInActions from '../../redux/actions/SignInActions';
import { useDispatch, useSelector } from 'react-redux';
import ReactNativeCrossPicker from "react-native-cross-picker"

import axios from 'axios';
import COLOR from '../../utils/color';

const { width } = Dimensions.get('window');

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
  const [countryCode, setCountryCode] = React.useState('IN')
  const [sourceInfoText, setSourceInfoText] = React.useState('')
  const [institute, setinstitute] = React.useState('')
  const [country, setCountry] = React.useState({ callingCode: ["+91"] })
  const [indicator, showIndicator] = React.useState(false)

  const [registeredForExam, setRegisteredForExam] = React.useState('')
  const [infoAboutIPTSE, setInfoAboutIPTSE] = React.useState('')

  const [selectedUniversity, setSelectedUniversity] = React.useState('')
  const [universities, setUniversities] = React.useState([{ label: "", value: "" }]);
  const [allUniversitiesDetail, setAllUniversitiesDetail] = React.useState([]);

  const exams = [
    { label: "Engineering and Tech", value: "Engineering and Tech" },
    { label: "Hotel Management Hospitality Industry", value: "Hotel Management Hospitality Industry" },
    { label: "LAW students with IP specialization", value: "LAW students with IP specialization" },
    { label: "LAW students without IP specialization", value: "LAW students without IP specialization" },
    { label: "Mass Communication & Multimedia", value: "Mass Communication & Multimedia" },
    { label: "Researcher/ & Science", value: "Researcher/ & Science" },
    { label: "Design & Architecture", value: "Design & Architecture" },
  ]

  const infosIPTSE = [
    { label: "AICTE", value: "AICTE" },
    { label: "Indian Chamber of Commerce (ICC)", value: "Indian Chamber of Commerce (ICC)" },
    { label: "IPTSE Academy", value: "IPTSE Academy" },
    { label: "Your institute", value: "Your institute" },
    { label: "Ministry of Science & Technology", value: "Ministry of Science & Technology" },
    { label: "INSPIRE", value: "INSPIRE" },
    { label: "MANAK", value: "MANAK" },
    { label: "Ministry of Information and Communication Technology", value: "Ministry of Information and Communication Technology" },
    { label: "Blog", value: "Blog" },
    { label: "Social Media", value: "Social Media" },
    { label: "Google", value: "Google" },
    { label: "Any Other...", value: "Any Other..." }
  ]

  const iconComponent = () => {
    return null
    // <MaterialCommunityIcons
    //   name={"chevron-down"}
    //   size={20}
    //   color={"grey"}
    // />
  }

  const signUpData = useSelector(state => state.SignUp.data);
  const requesting = useSelector(state => state.SignUp.isRequesting);

  const onClickSelectStudentTypeListener = index => {
    setSelectedStudentType(index);
    switch (index) {
      case 0:
        setStudentType(APP_CONSTANT.schoolStudentText1);
        console.log("studentType: ", studentType)
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
    const result = validatePhone(country.callingCode[0] + phone);
    setPhoneError(result);
  };

  const onValidateOrganisation = () => {
    const result = validateText(organisation);
    setOrganisationError(result);
  };

  const onSignUpClickListener = async () => {
    try {
      // if (isValid()) {

      showIndicator(true)

      Log('[CreateAccount]- student Type-', studentType);
      Log('[CreateAccount]- name-', name);
      Log('[CreateAccount]- email-', email);
      Log('[CreateAccount]- phone-', country.callingCode[0] + phone);
      Log('[CreateAccount]- organisation-', organisation);

      let uniId = [{ id: null }]
      if (selectedUniversity) {
        uniId = allUniversitiesDetail.filter((item) => item.name === selectedUniversity);
      }
      // "+917703101794"
      const data = {
        email: email,
        name: name,
        phone: country.callingCode[0] + phone,
        type: studentType,
        registerFor: 'EXAM',
        registeredForExam: registeredForExam,
        sourceOfInformation: sourceInfoText === "Any Other..." ? sourceInfoText : (sourceInfoText === "Your institute" ? institute : sourceInfoText),
        universityId: uniId[0].id ? uniId[0].id : null,
        universityName: selectedUniversity,
      };

      let { data: res } = await axios.post("https://iptseapi.kilobyte.live/v1/Member", data)
      notifyMessage(JSON.stringify(res));
      Log('[CreateAccount]- data-', JSON.stringify(res));
      alert("Registration Successful")
      // }
    } catch (error) {
      showIndicator(false)
      alert("Registration Error", error)
      console.log("Registration Error: ", error)
    }
    showIndicator(false)
    // props.navigation.navigate("VERIFY_MOBILE_ROUTE")

  };

  const onSignInPressClickListener = () => {
    props.navigation.navigate(LOGIN_ROUTE);
  };

  const isValid = () => {
    const nameResult = validateText(name);
    setNameError(nameResult);
    const emailResult = validateEmail(email);
    setEmailError(emailResult);
    const phoneResult = validatePhone(country.callingCode[0] + phone);
    setPhoneError(phoneResult);
    // const orgResult = validateText(organisation);
    // setOrganisationError(orgResult);
    return !nameResult && !emailResult && !phoneResult;
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

  const getAllUniversites = async () => {
    try {
      let { data } = await axios.get("https://iptseapi.kilobyte.live/v1/University");
      data = data.data
      setAllUniversitiesDetail(data);

      let tempUni = []
      for (let i = 0; i < data.length; i++) {
        let tempObj = { label: data[i].name, value: data[i].name };
        tempUni.push(tempObj)
      }
      setUniversities(tempUni);

    } catch (error) {

    }
  }

  useEffect(() => {
    getAllUniversites()
    if (signUpData) {
      const { otp } = signUpData;
      notifyMessage(JSON.stringify(signUpData));
      if (otp) {
        const data = { phone: country.callingCode[0] + phone, otp: otp };
        dispatch(SignInActions.SignInRequestAsync(data));
      }
    }
  }, [signUpData]);

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  return (
    <>
      <StatusBar backgroundColor="white" />
      <ScrollView style={{ backgroundColor: "white" }} showsVerticalScrollIndicator={false}>
        <LoadingModal show={indicator} />
        <Loader loading={requesting} />
        <KeyboardAvoidingView
          style={styles.container}
        // behavior="padding"
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
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
          {
            studentType === "SCHOOL_STUDENT" ?
              <Input
                label={APP_CONSTANT.organisationNameText}
                placeholder="school name"
                value={organisation}
                error={organisationError}
                onChangeText={onChangeOrganisation}
              /> : null
          }
          {
            studentType === "Faculty/Working Professional/Startup" ?
              <Input
                label={APP_CONSTANT.organisationNameText}
                placeholder="Organisation"
                value={organisation}
                error={organisationError}
                onChangeText={onChangeOrganisation}
              /> : null
          }
          {
            studentType === "COLLEGE_STUDENT" ?
              <>
                <Text style={styles.text}>University</Text>
                <ReactNativeCrossPicker
                  modalTextStyle={{ color: COLOR.black }}
                  mainComponentStyle={{ borderColor: COLOR.gray1, marginBottom: normalizeSize(20, 'height'), height: normalizeSize(43, 'height') }}
                  iconComponent={iconComponent}
                  items={universities}
                  width={normalizeSize(width * 0.8, 'width')}
                  setItem={setSelectedUniversity} selectedItem={selectedUniversity}
                  placeholder="University"
                  modalMarginTop={"90%"} // popup model margin from the top 
                /></> : null
          }

          <Text style={styles.text}>Registered for Exam</Text>
          <ReactNativeCrossPicker
            modalTextStyle={{ color: COLOR.black }}
            mainComponentStyle={{ borderColor: COLOR.gray1, marginBottom: normalizeSize(20, 'height'), height: normalizeSize(43, 'height') }}
            iconComponent={iconComponent}
            items={exams}
            width={normalizeSize(width * 0.8, 'width')}
            setItem={setRegisteredForExam} selectedItem={registeredForExam}
            placeholder="Registered for Exam"
            modalMarginTop={"90%"} // popup model margin from the top 
          />

          <Text style={styles.text}>Source of information about IPTSE</Text>
          <ReactNativeCrossPicker
            modalTextStyle={{ color: COLOR.black }}
            mainComponentStyle={{ borderColor: COLOR.gray1, marginBottom: normalizeSize(20, 'height'), height: normalizeSize(43, 'height') }}
            iconComponent={iconComponent}
            items={infosIPTSE}
            width={normalizeSize(width * 0.8, 'width')}
            setItem={setInfoAboutIPTSE} selectedItem={infoAboutIPTSE}
            placeholder="Source of information about IPTSE"
            modalMarginTop={"90%"} // popup model margin from the top 
          />

          {
            infoAboutIPTSE === "Any Other..." ?
              <Input
                label={"Source of Information"}
                placeholder="Source of Information"
                value={sourceInfoText}
                onChangeText={setSourceInfoText}
              /> : null
          }

          {
            infoAboutIPTSE === "Your institute" ?
              <Input
                label={"Source of Information"}
                placeholder="Source of Information"
                value={institute}
                onChangeText={setinstitute}
              /> : null
          }

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
          <TouchableOpacity onPress={() => Linking.openURL("https://e-learning.iptse.com/signup")} >
            <Text style={[styles.text3, styles.mt, { marginBottom: normalizeSize(20, 'height'), borderBottomWidth: 1, borderColor: COLOR.darkGreen }]}>Terms and Conditions</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default CreateAccountPage;
