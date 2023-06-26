import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useState } from 'react';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');

  const { repositories } = useRepositories({ orderBy, orderDirection, searchKeyword });

  return <RepositoryListContainer repositories={repositories} setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} setSearchKeyword={setSearchKeyword}  />;
};

export default RepositoryList;