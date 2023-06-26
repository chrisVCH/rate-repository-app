import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  viewRating: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    borderRadius: 60 / 2,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'white',
  },
  textRating: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 20,
  },
  header: {
    paddingLeft: 20,
    paddingBottom: 10
  }
})
  
const ReviewSectioin = ({
  rating,
  user,
  createdAt,
  text
}) => {
  
  const createdDate = new Date(createdAt.slice(0, 10));
  const formattedDate = format(createdDate, 'MM.dd.yyyy');
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewRating}>
          <Text style={styles.textRating}>{rating}</Text>
        </View>
        <View style={{...styles.header, flexShrink: 1 }}>
          <Text fontWeight='bold'>{user.username}</Text>
          <Text>{formattedDate}</Text>
          <Text           
            style={{ flexShrink: 1, paddingRight: 30, paddingTop: 10 }}
          >
            {text}
          </Text>
        </View>
      </View>
    </>
  )
};

export default ReviewSectioin;