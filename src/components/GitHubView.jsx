import { Pressable, View, StyleSheet } from "react-native";
import Text from '../components/Text';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  content: {
    paddingTop: 10, 
    paddingLeft: 25, 
    paddingRight: 25,
    paddingBottom: 10
  },
  text: {
    paddingTop: 8, 
    paddingBottom: 8, 
    textAlighVertically: 'center', 
    textAlign: 'center',
    borderRadius: 5
  }
});

const handleSubmit = (url) => {
  Linking.openURL(url);
}

const GitHubView = ({ url }) => {
     
  return (
    <>
      <View style={styles.content}> 
      <Pressable onPress={() => handleSubmit(url)}>
        <Text 
          fontWeight='bold' 
          backgroundColor='primary' 
          color='textWhite' 
          style={styles.text}>
          Open in GitHub   
        </Text>
      </Pressable>
      </View>
    </>
)};

export default GitHubView;
  