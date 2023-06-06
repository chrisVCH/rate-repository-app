import React from 'react';
//import Line from './Line';
import StatSection from './StatSection';
import HeaderSectioin from './HeaderSection';

const RepositoryItem = ({
  fullName,
  description, 
  language, 
  forksCount, 
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl
}) => (
  <>
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
  </>
);

export default RepositoryItem;