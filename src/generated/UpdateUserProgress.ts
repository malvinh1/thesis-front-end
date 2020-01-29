/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserProgress
// ====================================================

export interface UpdateUserProgress_updateUserProgress_progress {
  __typename: "Progress";
  id: string;
  CPR: number;
  Burns: number;
  Bruised: number;
  OpenWound: number;
  NoseBleed: number;
  Cramps: number;
}

export interface UpdateUserProgress_updateUserProgress {
  __typename: "User";
  id: string;
  progress: UpdateUserProgress_updateUserProgress_progress;
}

export interface UpdateUserProgress {
  updateUserProgress: UpdateUserProgress_updateUserProgress;
}

export interface UpdateUserProgressVariables {
  CPR?: number | null;
  Burns?: number | null;
  Bruised?: number | null;
  OpenWound?: number | null;
  NoseBleed?: number | null;
  Cramps?: number | null;
}
