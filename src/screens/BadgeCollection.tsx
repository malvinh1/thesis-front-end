import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { Text, IconButton, Avatar } from 'exoflex';
import { useNavigation } from 'naviflex';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import { badges } from '../constants/badges';

import { GET_PROFILE_DATA } from '../graphql/queries/myProfileQuery';

import { myProfile } from '../generated/myProfile';

export default function BadgeCollection() {
  let { navigate } = useNavigation();

  const { data } = useQuery<myProfile>(GET_PROFILE_DATA);

  return (
    <View style={styles.flex}>
      <View style={styles.navbar}>
        <IconButton
          icon="arrow-left"
          color={COLORS.primaryColor}
          onPress={() => navigate('Profile')}
        />
        <Text weight="medium" style={styles.title}>
          My Badge
        </Text>
        <View />
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Avatar.Image
            style={styles.avatar}
            source={
              data?.myProfile.progress.CPR === 10
                ? badges[0].image
                : require('../../assets/images/lock.png')
            }
          />
          <View style={styles.marginLeft}>
            <Text style={styles.badgeName} weight="medium">
              {badges[0].name}
            </Text>
            <Text style={styles.requirement} weight="medium">
              {badges[0].description}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Avatar.Image
            style={styles.avatar}
            source={
              data?.myProfile.progress.Burns === 10
                ? badges[1].image
                : require('../../assets/images/lock.png')
            }
          />
          <View style={styles.marginLeft}>
            <Text style={styles.badgeName} weight="medium">
              {badges[1].name}
            </Text>
            <Text style={styles.requirement} weight="medium">
              {badges[1].description}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Avatar.Image
            style={styles.avatar}
            source={
              data?.myProfile.progress.NoseBleed === 10
                ? badges[2].image
                : require('../../assets/images/lock.png')
            }
          />
          <View style={styles.marginLeft}>
            <Text style={styles.badgeName} weight="medium">
              {badges[2].name}
            </Text>
            <Text style={styles.requirement} weight="medium">
              {badges[2].description}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Avatar.Image
            style={styles.avatar}
            source={
              data?.myProfile.progress.Bruised === 10
                ? badges[3].image
                : require('../../assets/images/lock.png')
            }
          />
          <View style={styles.marginLeft}>
            <Text style={styles.badgeName} weight="medium">
              {badges[3].name}
            </Text>
            <Text style={styles.requirement} weight="medium">
              {badges[3].description}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Avatar.Image
            style={styles.avatar}
            source={
              data?.myProfile.progress.OpenWound === 10
                ? badges[4].image
                : require('../../assets/images/lock.png')
            }
          />
          <View style={styles.marginLeft}>
            <Text style={styles.badgeName} weight="medium">
              {badges[4].name}
            </Text>
            <Text style={styles.requirement} weight="medium">
              {badges[4].description}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Avatar.Image
            style={styles.avatar}
            source={
              data?.myProfile.progress.Cramps === 10
                ? badges[5].image
                : require('../../assets/images/lock.png')
            }
          />
          <View style={styles.marginLeft}>
            <Text style={styles.badgeName} weight="medium">
              {badges[5].name}
            </Text>
            <Text style={styles.requirement} weight="medium">
              {badges[5].description}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Avatar.Image
            style={styles.avatar}
            source={
              data?.myProfile.avatarCollection?.length === 9
                ? badges[6].image
                : require('../../assets/images/lock.png')
            }
          />
          <View style={styles.marginLeft}>
            <Text style={styles.badgeName} weight="medium">
              {badges[6].name}
            </Text>
            <Text style={styles.requirement} weight="medium">
              {badges[6].description}
            </Text>
          </View>
        </View>
      </ScrollView>
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
  badgeName: {
    fontSize: FONT_SIZE.large,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    height: 96,
    alignItems: 'center',
    margin: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  flex: {
    flex: 1,
  },
  marginLeft: {
    marginLeft: 16,
  },
  navbar: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    marginTop: 35,
    paddingLeft: 8,
  },
  requirement: {
    marginTop: 8,
    opacity: 0.6,
  },
  title: {
    fontSize: FONT_SIZE.large,
    marginRight: 42,
    marginBottom: 8,
  },
});
