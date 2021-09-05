import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = props => {
  const {loading} = props;

  if (!loading) return null;

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

export default Loader;
