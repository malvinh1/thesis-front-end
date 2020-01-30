import gql from 'graphql-tag';

export const GET_AVATARS = gql`
  query Avatars {
    avatars {
      id
      image
      price
    }
  }
`;
