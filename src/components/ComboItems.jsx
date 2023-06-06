import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

const ComboItems = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

export default ComboItems;
