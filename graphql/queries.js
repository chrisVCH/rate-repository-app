import { gql } from '@apollo/client';

const REPOSITORY_DETAILS = gql`
fragment REPOSITORY_DETAILS on Repository {
  id
  fullName
  description
  language
  stargazersCount
  forksCount
  reviewCount
  ratingAverage
  ownerAvatarUrl
  url
}`

export const GET_REPOSITORIES = gql `
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {        
          ...REPOSITORY_DETAILS
        }
      }
    }
  }

${REPOSITORY_DETAILS}  
`

export const USER_LOG_IN = gql `
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
export const REPOSITORY_URL = gql `
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
  }
}
`

export const REPOSITORY_REVIEW = gql `
  query Review($id: ID!, $cursor: String)  {
    repository(id: $id) {
      ...REPOSITORY_DETAILS
      reviews (first: 4, after: $cursor) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
${REPOSITORY_DETAILS}  
`

export const CREATE_REPOSITORY_REVIEW = gql `

mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    user {
      username      
      id
    }
    repository {
      ...REPOSITORY_DETAILS
    }
    userId
    repositoryId
    rating
    createdAt
    text
  }
}

${REPOSITORY_DETAILS}  
`

export const CREATE_USER = gql`
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
`

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = true) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`