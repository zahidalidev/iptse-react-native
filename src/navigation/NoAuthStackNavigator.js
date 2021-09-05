import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccountPage from '../screens/create-account';
import ForgotPasswordPage from '../screens/forgot-password';
import SignInPage from '../screens/login';
import VerifyMobilePage from '../screens/verify-mobile';
import CourseDetailPage from '../screens/course-detail';

import {
  FORGOT_PASSWORD_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  VERIFY_MOBILE_ROUTE,
} from './nav-keys';

const Stack = createStackNavigator();

const NoAuthStackNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName={REGISTER_ROUTE}
      screenOptions={({route, navigation}) => ({
        // headerLeft: () => <Text>Back</Text>,
        header: () => null,
      })}>
      <Stack.Screen
        name={REGISTER_ROUTE}
        component={CreateAccountPage}
        // options={{header: null}}
      />
      <Stack.Screen name={LOGIN_ROUTE} component={SignInPage} />
      <Stack.Screen name={VERIFY_MOBILE_ROUTE} component={VerifyMobilePage} />
      <Stack.Screen
        name={FORGOT_PASSWORD_ROUTE}
        component={ForgotPasswordPage}
      />
    </Stack.Navigator>
  );
};

export default NoAuthStackNavigator;
