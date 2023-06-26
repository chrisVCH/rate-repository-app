import React from 'react';
import StatSection from './StatSection';
import HeaderSectioin from './HeaderSection';
import { Pressable, View } from 'react-native';
import GitHubView from './GitHubView';
import { useNavigate } from 'react-router-native';

const RepositoryItem = ({
  id,
  fullName,
  description, 
  language, 
  forksCount, 
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
  repositoryId,
  url
}) => { 
  const navigate = useNavigate();
  
  return (
  <>
    <View testID="repositoryItem">
    <Pressable onPress={() => navigate(`/github/${id}`)}>
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
    </Pressable>
    { repositoryId !== '' && <GitHubView url={url} /> }
    </View>
  </>
)};

export default RepositoryItem;