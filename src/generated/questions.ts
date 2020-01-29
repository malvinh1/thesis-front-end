/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Category, QuestionEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: questions
// ====================================================

export interface questions_questions_choices {
  __typename: "Choice";
  answer: string;
  correct: boolean;
}

export interface questions_questions {
  __typename: "Question";
  id: string;
  description: string;
  choices: questions_questions_choices[] | null;
  category: QuestionEnum;
}

export interface questions {
  questions: questions_questions[];
}

export interface questionsVariables {
  category: Category;
}
