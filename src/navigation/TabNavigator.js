import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  TAB_COURSES_ROUTE,
  TAB_EXAM_ROUTE,
  TAB_HOME_ROUTE,
  TAB_WEBINARS_ROUTE,
  TAB_PROFILE_ROUTE,
  PROFILE_EDIT_ROUTE,
} from './nav-keys';
import ExamPage from '../screens/exam';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import COLOR from '../utils/color';
import {normalizeSize} from '../utils/util';
import WebinarsPage from '../screens/webinars';
import CoursesPage from '../screens/courses';
import HomePage from '../screens/home';
import ProfilePage from '../screens/profile';

const playIcon = require('../../assets/ic_play.png');
const bookIcon = require('../../assets/ic_book.png');
const homeIcon = require('../../assets/ic_home.png');
const examIcon = require('../../assets/ic_exam.png');
const userIcon = require('../../assets/ic_user_2.png');

const deviveWidth = Dimensions.get('window').width;

const TabButton = props => {
  const {children, onPress, accessibilityState} = props;
  const {selected} = accessibilityState || {};
  return (
    <TouchableOpacity
      style={{
        top: selected ? -10 : 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          width: selected ? 90 : deviveWidth / 5,
          height: selected ? 90 : 50,
          borderRadius: selected ? 45 : 0,
          backgroundColor: COLOR.white,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const focusedTabbarIcon = (icon, label) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          backgroundColor: COLOR.orange,
        }}>
        <Image
          source={icon}
          style={{width: 25, height: 25, tintColor: COLOR.white}}
        />
      </View>
      <Text style={{color: COLOR.orange}}>{label}</Text>
    </View>
  );
};

const unFocusedTabbarIcon = icon => {
  return (
    <View>
      <Image
        source={icon}
        style={{
          width: 25,
          height: 25,
          tintColor: COLOR.orange,
        }}
      />
    </View>
  );
};

const renderHeaderRight = navigation => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 20,
        // backgroundColor: COLOR.orange3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: normalizeSize(10),
      }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(PROFILE_EDIT_ROUTE)}>
        <Image
          source={require('../../assets/edit.png')}
          style={{width: 20, height: 20, tintColor: COLOR.black}}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarLabel: () => null,
        // header: () => null,
        // headerLeft: props => renderHeaderLeft(navigation),
      })}>
      <Tab.Screen
        name={TAB_WEBINARS_ROUTE}
        component={WebinarsPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused
              ? focusedTabbarIcon(playIcon, 'Webinars')
              : unFocusedTabbarIcon(playIcon),
          tabBarButton: props => <TabButton {...props} />,
          headerLeft: null,
        }}
      />
      <Tab.Screen
        name={TAB_COURSES_ROUTE}
        component={CoursesPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused
              ? focusedTabbarIcon(bookIcon, 'Courses')
              : unFocusedTabbarIcon(bookIcon),
          tabBarButton: props => <TabButton {...props} />,
          headerTitle: () => <Text>All Courses</Text>,
        }}
      />
      <Tab.Screen
        name={TAB_HOME_ROUTE}
        component={HomePage}
        options={({route, navigation}) => ({
          title: 'IPTSE Olympiad',
          tabBarIcon: ({focused}) =>
            focused
              ? focusedTabbarIcon(homeIcon, 'Home')
              : unFocusedTabbarIcon(homeIcon),
          tabBarButton: props => <TabButton {...props} />,
        })}
      />
      <Tab.Screen
        name={TAB_EXAM_ROUTE}
        component={ExamPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused
              ? focusedTabbarIcon(examIcon, 'Exams')
              : unFocusedTabbarIcon(examIcon),
          tabBarButton: props => <TabButton {...props} />,
        }}
      />
      <Tab.Screen
        name={TAB_PROFILE_ROUTE}
        component={ProfilePage}
        options={({route, navigation}) => ({
          tabBarIcon: ({focused}) =>
            focused
              ? focusedTabbarIcon(userIcon, 'Profile')
              : unFocusedTabbarIcon(userIcon),
          tabBarButton: props => <TabButton {...props} />,
          headerTitle: () => <Text>My Profile</Text>,
          headerStyle: {
            alignItems: 'center',
          },
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerRight: () => renderHeaderRight(navigation),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
