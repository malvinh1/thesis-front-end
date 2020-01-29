import gql from 'graphql-tag';

export const GET_QUESTIONS = gql`
  query questions($category: Category!) {
    questions(category: $category) {
      id
      description
      choices {
        answer
        correct
      }
      category
    }
  }
`;
