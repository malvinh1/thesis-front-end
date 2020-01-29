import gql from 'graphql-tag';

export const UPDATE_USER_PROGRESS = gql`
  mutation UpdateUserProgress(
    $CPR: Int
    $Burns: Int
    $Bruised: Int
    $OpenWound: Int
    $NoseBleed: Int
    $Cramps: Int
  ) {
    updateUserProgress(
      CPR: $CPR
      Burns: $Burns
      Bruised: $Bruised
      OpenWound: $OpenWound
      NoseBleed: $NoseBleed
      Cramps: $Cramps
    ) {
      id
      progress {
        id
        CPR
        Burns
        Bruised
        OpenWound
        NoseBleed
        Cramps
      }
    }
  }
`;
