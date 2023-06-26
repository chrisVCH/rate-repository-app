import { StyleSheet, Alert, FlatList, View, Text, SafeAreaView, StatusBar } from 'react-native';
import ReviewSectioin from './ReviewSection';
import { GET_CURRENT_USER } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-native';
import useReviewToDelete from '../hooks/useReviewToDelete';


const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
  parent: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
    },
  separator: {
    height: 10,
    backgroundColor: '#ddd'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review, userId }) => {
  const navigate = useNavigate();
  const [deleteReview] = useReviewToDelete();
  const { refetch } = useQuery(GET_CURRENT_USER, {
  });

  // Single review item
  const handleView = () => {
    const reviewId = review ? review.id : ''
    const repoId = reviewId 
      ? reviewId.slice(userId.length + 1, reviewId.length)
      : '';
      navigate(`/github/${repoId}`);
  }

  const handleDelete = () => {
    const reviewId = review ? review.id : ''
    showAlert(reviewId);
  }

   const showAlert = async (reviewId) => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {  
          text: 'Cancel',  
          onPress: () => console.log('Cancel Pressed'),  
          style: 'cancel',  
        },  
        {
          text: 'OK', 
          onPress: async () => {
            const { data, error } = deleteReview({reviewId});
            console.log('success delete review', data);
            console.log('failure delete review', error);
            await refetch();
          }
        },  
      ]
    )
  };

  const { rating, user, createdAt, text } = review;

  return (
    <>
      <ReviewSectioin 
        rating={rating} 
        user={user}
        createdAt={createdAt}
        text={text}
      />
      <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.parent}>
            <CustomButton text={"View repository"} bkColor={"blue"} onPress={handleView} />
            <CustomButton text={"Delete repository"} bkColor={"red"} onPress={handleDelete} />
          </View>
        </SafeAreaView>
    </>
  )
};
  
const MyReview = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network'
  });
  
  if (loading) return (<Text>Loading...</Text>);
  if (error) return (<Text>Please check error: {error.message}</Text>);
  
  const reviewNodes = data.me.reviews
  ? data.me.reviews.edges.map((edge) => edge.node)
  : [];

  const userId = data.me.id
  ? data.me.id
  : '';

  return (
    <>
      <ItemSeparator />
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} userId={userId} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </>
  );
};
  
export default MyReview;