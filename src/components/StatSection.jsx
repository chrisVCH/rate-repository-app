import React from 'react';
import ComboItems from './ComboItems';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import formatNumber from '../utils/formatNumber';

const styles = StyleSheet.create({
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: theme.colors.textWhite 
  }
})

const StatSection = ({
  forksCount, 
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {

  const starsCount = formatNumber(stargazersCount);
  const fkCount = formatNumber(forksCount);
   
  return  (
    <>
      <View style={styles.stats}>
        <ComboItems>
          <Text 
            style={{paddingBottom: 5}}
            fontWeight='bold'
            fontSize='subheading'
          >
          {starsCount}
          </Text>
          <Text>Stars</Text>
        </ComboItems>
        <ComboItems>
          <Text 
            style={{paddingBottom: 5}}
            fontWeight='bold'
            fontSize='subheading'
          >
          {fkCount}
          </Text>
          <Text>Forks</Text>
        </ComboItems>
        <ComboItems>
          <Text 
            style={{paddingBottom: 5}}
            fontWeight='bold'
            fontSize='subheading'
          >
            {reviewCount}
          </Text>
          <Text>Reviews</Text>
        </ComboItems>
        <ComboItems>
          <Text 
            style={{paddingBottom: 5}}
            fontWeight='bold'
            fontSize='subheading'
          >
            {ratingAverage}
          </Text>
          <Text>Rating</Text>
        </ComboItems>
      </View>
    </>
  )
}
  
export default StatSection;