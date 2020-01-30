/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddToAvatarCollection
// ====================================================

export interface AddToAvatarCollection_addToAvatarCollection_avatar {
  __typename: "Avatar";
  id: string;
  image: string;
  price: number;
}

export interface AddToAvatarCollection_addToAvatarCollection_avatarCollection {
  __typename: "Avatar";
  id: string;
  image: string;
  price: number;
}

export interface AddToAvatarCollection_addToAvatarCollection_badge {
  __typename: "Badge";
  id: string;
  name: string;
}

export interface AddToAvatarCollection_addToAvatarCollection_progress {
  __typename: "Progress";
  id: string;
  CPR: number;
  Burns: number;
  Bruised: number;
  OpenWound: number;
  NoseBleed: number;
  Cramps: number;
}

export interface AddToAvatarCollection_addToAvatarCollection {
  __typename: "User";
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: AddToAvatarCollection_addToAvatarCollection_avatar | null;
  avatarCollection: AddToAvatarCollection_addToAvatarCollection_avatarCollection[] | null;
  badge: AddToAvatarCollection_addToAvatarCollection_badge[] | null;
  highestScore: number;
  point: number;
  progress: AddToAvatarCollection_addToAvatarCollection_progress;
  createdAt: any;
}

export interface AddToAvatarCollection {
  addToAvatarCollection: AddToAvatarCollection_addToAvatarCollection;
}

export interface AddToAvatarCollectionVariables {
  avatarId: string;
}
