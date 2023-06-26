import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar
  }
});

const AppBar = () => (
  <>
    <View style={styles.container}>
      <ScrollView horizontal={true}>
      <AppBarTab />
      </ScrollView>
    </View>
  </>
);
  
export default AppBar;