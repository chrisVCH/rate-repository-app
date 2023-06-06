import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Text from '../components/Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  avatar: {
    width: 66,
    height: 58,
    borderRadius: 5
  },
  header: {
    alignItems: 'flex-start',
    padding: 5,
    paddingBottom: 10
  }
})
  
const HeaderSectioin = ({
  fullName,
  description,
  language,
  ownerAvatarUrl
}) => (
  <>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: ownerAvatarUrl,
        }}
      />
      <View style={styles.header}>
        <Text fontWeight='bold'>Full name: {fullName}</Text>
        <Text style={{paddingTop: 5, paddingBottom: 5}}>{description}</Text>
        <Text 
          color='textWhite' 
          fontSize='subheading' 
          backgroundColor='primary' 
          borderRadius='primary' 
          style={{padding: 5}}
        >
          {language}
        </Text>
      </View>
    </View>
  </>
);

export default HeaderSectioin;