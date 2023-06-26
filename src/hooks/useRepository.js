import { useState, useEffect } from 'react';
import { useParams } from 'react-router-native';

import { REPOSITORY_REVIEW } from '../../graphql/queries'
import { useQuery } from '@apollo/client';

const useRepository = () => {
  const [url, setUrl] = useState();
  const [repositoryId, setRepositoryId] = useState();
  const [repository, setRepository] = useState();
  const [reviews, setReviews] = useState();
  const routeParams = useParams();
  const repoId = Object.keys(routeParams).length === 0
    ? ''
    : routeParams.id;

  const { loading, error, data, fetchMore, ...result } = useQuery(REPOSITORY_REVIEW, {
    fetchPolicy: 'cache-and-network',
    variables: {
      "id": repoId,
      "cursor": ""
    }
  });

  const handleFetchMore = () => {
    
    const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;
    
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        "id": data.repository.id,
        "cursor": data.repository.reviews.pageInfo.endCursor, 
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult
        return {
          repository: {
          ...prevResult.repository,
          reviews: {
            ...fetchMoreResult.repository.reviews,
          edges: [
            ...prevResult.repository.reviews.edges,
            ...fetchMoreResult.repository.reviews.edges
          ]
          }
          }
        }
      },
    });
  };
 
  useEffect(() => {
    const onCompleted = (data) => { 
      if (data.repository !== null) {
        setRepositoryId(repoId);
        setUrl(data.repository.url); 
        setReviews(data.repository.reviews);
        setRepository(data.repository);
      } else {
        setRepositoryId('');
        setUrl('');
      }
    };

    const onError = (error) => { 
      console.log(error);
    };
    
    if (onCompleted || onError) {
      if (onCompleted && !loading && !error) {
        onCompleted(data);
      } else if (onError && !loading && error) {
        onError(error);
      }
    }
  }, [loading, data, error]);

  if (loading) return <p>Loading....</p>;  
  
  return { repository, repositoryId, url, reviews, error, fetchMore: handleFetchMore, loading, data, ...result };
};

export default useRepository;




