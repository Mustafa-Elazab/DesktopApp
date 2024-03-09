import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';

export default React.memo(() => {
  return (
    <View style={styles.header}>
      <Text style={styles.appName}>Roqay Ai</Text>
    </View>
  );
});
