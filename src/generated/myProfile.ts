/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myProfile
// ====================================================

export interface myProfile_myProfile_avatar {
  __typename: "Avatar";
  id: string;
  image: string;
  price: number;
}

export interface myProfile_myProfile_avatarCollection {
  __typename: "Avatar";
  id: string;
  image: string;
  price: number;
}

export interface myProfile_myProfile_badge {
  __typename: "Badge";
  id: string;
  name: string;
}

export interface myProfile_myProfile {
  __typename: "User";
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: myProfile_myProfile_avatar | null;
  avatarCollection: myProfile_myProfile_avatarCollection[] | null;
  badge: myProfile_myProfile_badge[] | null;
  highestScore: number;
  point: number;
  createdAt: any;
}

export interface myProfile {
  myProfile: myProfile_myProfile;
}
