/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: leaderboard
// ====================================================

export interface leaderboard_leaderboard_avatar {
  __typename: "Avatar";
  id: string;
  image: string;
  price: number;
}

export interface leaderboard_leaderboard {
  __typename: "User";
  name: string;
  avatar: leaderboard_leaderboard_avatar | null;
  highestScore: number;
}

export interface leaderboard {
  leaderboard: leaderboard_leaderboard[];
}
