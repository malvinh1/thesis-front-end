import gql from 'graphql-tag';

export const GET_LEADERBOARD = gql`
  query leaderboard {
    leaderboard {
      name
      avatar {
        id
        image
        price
      }
      highestScore
    }
  }
`;
