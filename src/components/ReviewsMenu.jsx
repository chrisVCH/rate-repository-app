import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, TextInput } from 'react-native';

const ReviewsMenu = ({ setOrderBy, setOrderDirection, setSearchKeyword }) => {

  const [text, setText ] = useState('');
  useEffect(() => {
    const setData = setTimeout(() => {
      setSearchKeyword(text);
    }, 500);
    return () => clearTimeout(setData);
  }, [text])

  const styles = {
    container: {
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    barText: {
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: 'black'
    },
    input: {
      borderColor: "gray",
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 5,
    },
  }

  return (
    <View
      style={styles.container}>
      <ScrollView horizontal={true}>
    <Pressable onPress={()=> { 
      setOrderBy('CREATED_AT');
      setOrderDirection('DESC');
    }}>
      <Text style={styles.barText}>Latest repositories</Text>  
    </Pressable>
    <Pressable onPress={()=> { 
      setOrderBy('RATING_AVERAGE');
      setOrderDirection('DESC');
    }}>
      <Text style={styles.barText}>Highest rated repositories</Text>
    </Pressable>
    <Pressable onPress={()=> { 
      setOrderBy('RATING_AVERAGE');
      setOrderDirection('ASC');
    }}>
      <Text style={styles.barText}>Lowest rated repositories</Text>
    </Pressable>
    <TextInput
      style={styles.input}
      placeholder='Type here to search'
      onChangeText={newText => setText(newText)}
      defaultValue={text}
    />
    </ScrollView>
  </View>
  );
};

export default ReviewsMenu;