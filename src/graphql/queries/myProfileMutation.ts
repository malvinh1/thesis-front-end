import gql from 'graphql-tag';

export const MY_PROFILE = gql`
  query myProfile {
    myProfile {
      id
      email
      password
      name
      avatar {
        id
        image
        price
      }
      avatarCollection {
        id
        image
        price
      }
      badge {
        id
        name
      }
      highestScore
      point
      createdAt
    }
  }
`;
