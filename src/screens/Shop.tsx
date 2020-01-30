import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Text, Avatar, IconButton, ActivityIndicator } from 'exoflex';

import { Loading } from '../components';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { avatars } from '../constants/avatars';

import { GET_AVATARS } from '../graphql/queries/avatarsQuery';
import { GET_PROFILE_DATA } from '../graphql/queries/myProfileQuery';
import { ADD_TO_AVATAR_COLLECTION } from '../graphql/mutations/addToAvatarCollectionMutation';
import { UPDATE_PROFILE } from '../graphql/mutations/updateProfileMutation';

import { Avatars } from '../generated/Avatars';
import { myProfile } from '../generated/myProfile';
import {
  AddToAvatarCollection,
  AddToAvatarCollectionVariables,
} from '../generated/AddToAvatarCollection';
import {
  UpdateProfile,
  UpdateProfileVariables,
} from '../generated/UpdateProfile';

export default function Home() {
  const { loading: loadingAvatars, data: avatarsData } = useQuery<Avatars>(
    GET_AVATARS,
  );

  const { loading: loadingProfile, data: profileData } = useQuery<myProfile>(
    GET_PROFILE_DATA,
  );

  const [
    addToAvatarCollection,
    { loading: loadingAddToAvatarCollection },
  ] = useMutation<AddToAvatarCollection, AddToAvatarCollectionVariables>(
    ADD_TO_AVATAR_COLLECTION,
  );

  const [updateProfile, { loading: loadingUpdateProfile }] = useMutation<
    UpdateProfile,
    UpdateProfileVariables
  >(UPDATE_PROFILE);

  const onBuyAvatar = async (avatarId: string, price: number) => {
    if (profileData?.myProfile.point && profileData.myProfile.point >= price) {
      await addToAvatarCollection({
        variables: {
          avatarId,
        },
      });
      await updateProfile({
        variables: {
          point: profileData.myProfile.point - price,
        },
      });
    } else {
      Alert.alert(
        'Coins is not enough',
        'Play the quiz to earn more coins',
        [{ text: 'OK' }],
        {
          cancelable: false,
        },
      );
    }
  };

  const onEquipAvatar = async (avatarId: string) => {
    await updateProfile({
      variables: {
        avatarId,
      },
    });
  };

  if (loadingAvatars || loadingProfile) {
    return <Loading />;
  }

  return (
    <View style={styles.flex}>
      <View style={styles.navbar}>
        <Text weight="medium" style={styles.title}>
          Shop
        </Text>
        <View style={styles.center}>
          <Text style={styles.introText}>
            {
              "Select and buy the avatar that you like using the coin that you've collected!"
            }
          </Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        {
          <FlatList
            data={avatarsData?.avatars ?? []}
            contentInsetAdjustmentBehavior="always"
            renderItem={({ item, index }) => {
              return (
                <View style={styles.contentContainer} key={index}>
                  <Avatar.Image
                    style={styles.avatar}
                    source={avatars[Number(item.image)].image}
                  />
                  <View style={styles.marginLeft}>
                    <Text style={styles.avatarName} weight="medium">
                      {avatars[index + 1].name}
                    </Text>
                    <View style={styles.coins}>
                      <View style={styles.yellowCoin} />
                      <Text>{item.price}</Text>
                    </View>
                  </View>
                  {profileData?.myProfile.avatarCollection?.find(
                    (element) => item.id === element.id,
                  ) ? (
                    profileData.myProfile.avatar?.id === item.id ? (
                      <View style={styles.buyTextContainer}>
                        {loadingUpdateProfile ||
                        loadingAddToAvatarCollection ? (
                          <ActivityIndicator />
                        ) : (
                          <IconButton
                            icon="check-circle-outline"
                            color={COLORS.marigold}
                            style={styles.icon}
                          />
                        )}
                      </View>
                    ) : (
                      <TouchableOpacity
                        style={styles.buyTextContainer}
                        onPress={() => {
                          onEquipAvatar(item.id);
                        }}
                      >
                        {loadingUpdateProfile ||
                        loadingAddToAvatarCollection ? (
                          <ActivityIndicator />
                        ) : (
                          <Text weight="medium" style={styles.equipText}>
                            EQUIP
                          </Text>
                        )}
                      </TouchableOpacity>
                    )
                  ) : (
                    <TouchableOpacity
                      style={styles.buyTextContainer}
                      onPress={() => {
                        onBuyAvatar(item.id, item.price);
                      }}
                    >
                      {loadingUpdateProfile || loadingAddToAvatarCollection ? (
                        <ActivityIndicator />
                      ) : (
                        <Text weight="medium" style={styles.buyText}>
                          BUY
                        </Text>
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    backgroundColor: COLORS.grey,
  },
  avatarName: {
    fontSize: FONT_SIZE.large,
  },
  bodyContainer: {
    marginTop: 24,
    marginBottom: 230,
  },
  buyText: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.primaryColor,
  },
  buyTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 16,
  },
  coins: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  center: {
    alignItems: 'center',
    marginHorizontal: 24,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    height: 96,
    alignItems: 'center',
    marginBottom: 24,
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  equipText: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.marigold,
  },
  flex: {
    flex: 1,
  },
  icon: {
    margin: 0,
  },
  introText: {
    color: COLORS.white,
    opacity: 0.7,
    textAlign: 'center',
  },
  marginLeft: {
    marginLeft: 16,
  },
  navbar: {
    height: 231,
    backgroundColor: COLORS.mint,
    paddingTop: 75,
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
    fontSize: FONT_SIZE.xxLarge,
    color: COLORS.white,
  },
  yellowCoin: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.marigold,
    borderRadius: 5,
    marginRight: 8,
  },
});
