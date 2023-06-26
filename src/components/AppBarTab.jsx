import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { USER_IDENTITY } from '../../graphql/queries';
import { useApolloClient, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-native';

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
const AppBarTab = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  
  const { loading, error, data } = useQuery(USER_IDENTITY);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Please check error: {error.message}</Text>

  const Logout = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  }

  return (
    <View style={styles.bar}> 
      <Link to="/">
        <Text style={styles.barText}>Repositories</Text>  
      </Link>
      { !data.me && (
        <>
        <Link to="/signin">
          <Text style={styles.barText}>Sign in</Text>
        </Link>
        <Link to="/signup">
          <Text style={styles.barText}>Sign Up</Text>
        </Link>
        </>)
      }
      { data.me && (
      <>
      <Link to="/review">
      <Text style={styles.barText}>Create a review</Text>
      </Link>
      <Link to="/myreview">
      <Text style={styles.barText}>My review</Text>
      </Link>
      </>)}
      <Pressable onPress={Logout}>
        {data.me && <Text style={styles.barText}>Sign Out</Text>}
      </Pressable>
    </View>
)}

export default AppBarTab;