import gql from 'graphql-tag';

export const GET_PROFILE_DATA = gql`
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
      highestScore
      point
      progress {
        id
        CPR
        Burns
        Bruised
        OpenWound
        NoseBleed
        Cramps
      }
      createdAt
    }
  }
`;
