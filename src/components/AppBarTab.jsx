import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row'
  },
  barText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
    color: theme.colors.textWhite
  }
});
const AppBarTab = () => (
  <View style={styles.bar}> 
  <Link to="/">
    <Text style={styles.barText}>Repositories</Text>  
  </Link>
  <Link to="/signin">
  <Text style={styles.barText}>Sign in</Text>
  </Link>
  </View>
)

export default AppBarTab;