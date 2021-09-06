import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NoAuthStackNavigator from './NoAuthStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { useSelector } from 'react-redux';
import { getToken } from '../utils/util';
import { View } from 'react-native';
import { Loader } from '../common';

const Navigation = props => {
  const isLoggedIn = useSelector(state => state.SignIn.isLoggedIn);
  const [hasToken, setHasToken] = React.useState(false);
  const [fetching, setIsFetching] = React.useState(true);

  React.useEffect(async () => {
    const token = await getToken();
    if (token) {
      setIsFetching(false);
      setHasToken(true);
    } else {
      setIsFetching(false);
    }
  });

  if (fetching) {
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={fetching} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn || hasToken ? (
        <AuthStackNavigator />
      ) : (
        <NoAuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
