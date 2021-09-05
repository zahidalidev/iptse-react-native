import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import APP_CONSTANT from '../../constants/AppConstants';
import styles from './styles';

const SectionHeader = ({label, showViewAll = true}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.text5}>{label}</Text>
      {showViewAll && (
        <TouchableOpacity>
          <Text style={styles.text6}>{APP_CONSTANT.viewAllText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
