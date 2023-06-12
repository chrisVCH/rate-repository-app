import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql `
  query Repositories {
    repositories {
      edges {
        node {        
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          id
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const USESR_LOG_IN = gql `
  mutation Login($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const USER_IDENTITY = gql `
  query verifyUser {
    me {
      id
      username
    }
}
`

