import { useState, useEffect } from 'react';

import { GET_REPOSITORIES } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const {loading, data, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {

    const onCompleted = (data) => { 
      setRepositories(data.repositories); 
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
  
  return { repositories, error };
};

export default useRepositories;


