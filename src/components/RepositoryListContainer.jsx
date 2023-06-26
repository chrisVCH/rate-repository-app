import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ReviewsMenu from './ReviewsMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#ddd'
  },
});
  
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, setOrderBy, setOrderDirection, setSearchKeyword }) => {
 
  const repositoryNodes = repositories

    ? repositories.edges.map((edge) => edge.node) 
    : [];
   
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item})=> <RepositoryItem 
        id={item.id}
        fullName={item.fullName} 
        description={item.description}
        language={item.language} 
        forksCount={item.forksCount} 
        stargazersCount={item.stargazersCount}
        ratingAverage={item.ratingAverage}
        reviewCount={item.reviewCount}
        ownerAvatarUrl={item.ownerAvatarUrl}
        url={item.url}
      />}
      ListHeaderComponent={<ReviewsMenu setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} setSearchKeyword={setSearchKeyword} />}
    />
  )
};
      
export default RepositoryListContainer;