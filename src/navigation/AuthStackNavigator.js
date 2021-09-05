import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  COURSE_DETAIL_ROUTE,
  WEBINAR_DETAIL_ROUTE,
  TABS_ROUTE,
  PROFILE_EDIT_ROUTE,
} from './nav-keys';
import {View, TouchableWithoutFeedback, Image, Text} from 'react-native';
import COLOR from '../utils/color';
import {normalizeSize} from '../utils/util';
import TabNavigator from './TabNavigator';
import ProfileEditPage from '../screens/profile-edit';
import CourseDetailPage from '../screens/course-detail';
import WebinarPage from '../screens/webinar';

const Stack = createStackNavigator();

const renderHeaderLeft = navigation => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: COLOR.orange3,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: normalizeSize(10),
      }}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack(navigation)}>
        <Image
          source={require('../../assets/back.png')}
          style={{width: 20, height: 20, tintColor: COLOR.orange}}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const AuthStackNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName={TABS_ROUTE}
      screenOptions={({route, navigation}) => ({
        // headerLeft: props => renderHeaderLeft(navigation),
      })}>
      <Stack.Screen
        name={TABS_ROUTE}
        component={TabNavigator}
        options={({route, navigation}) => ({
          header: () => null,
        })}
      />
      <Stack.Screen
        name={WEBINAR_DETAIL_ROUTE}
        component={WebinarPage}
        options={({route, navigation}) => ({
          headerLeft: () => renderHeaderLeft(navigation),
        })}
      />
      <Stack.Screen
        name={COURSE_DETAIL_ROUTE}
        component={CourseDetailPage}
        options={({route, navigation}) => ({
          headerTitle: () => null,
          headerLeft: () => renderHeaderLeft(navigation),
        })}
      />
      <Stack.Screen
        name={PROFILE_EDIT_ROUTE}
        component={ProfileEditPage}
        options={({route, navigation}) => ({
          headerLeft: () => renderHeaderLeft(navigation),
          headerTitle: () => (
            <View>
              <Text>Edit Profile</Text>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
