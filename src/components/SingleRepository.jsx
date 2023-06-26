import { StyleSheet, FlatList, View, Text } from 'react-native';
import HeaderSectioin from './HeaderSection'
import StatSection from './StatSection';
import ReviewSectioin from './ReviewSection';
import GitHubView from './GitHubView';
import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#ddd'
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  const { 
    fullName, 
    description,
    language,
    ownerAvatarUrl,
    stargazersCount,
    forksCount,
    ratingAverage, 
    reviewCount,
    url
  } = repository;
  
  return (
    <>
      <View testID="repositoryItem">
      <HeaderSectioin 
        fullName={fullName}
        description={description}
        language={language}
        ownerAvatarUrl={ownerAvatarUrl}
      />
      <StatSection
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
      <GitHubView url={url}/> 
      <Text style={styles.separator} />
      </View>
    </>
  )
};
  
  const ReviewItem = ({ review }) => {
    // Single review item
    const { rating, user, createdAt, text } = review;
    return (
      <ReviewSectioin 
        rating={rating} 
        user={user}
        createdAt={createdAt}
        text={text}
       />
    )
  };
  
  const SingleRepository = () => {
    const { reviews, repository, fetchMore } = useRepository();
    const reviewNodes = reviews
      ? reviews.edges.map((edge) => edge.node)
      : [];

    const repositoryNode = repository
      ? repository
      : [];

    const onEndReach = () => {
        fetchMore();
    };

      return (<>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repositoryNode} />}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
     </>
    );
  };
  
  export default SingleRepository;