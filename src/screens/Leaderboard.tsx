import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton, Avatar } from 'exoflex';
import { useNavigation } from 'naviflex';

import { Loading } from '../components';
import { avatars } from '../constants/avatars';
import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import { useQuery } from '@apollo/react-hooks';
import { GET_LEADERBOARD } from '../graphql/queries/leaderboardQuery';
import { leaderboard } from '../generated/leaderboard';

export default function Leaderboard() {
  let { navigate } = useNavigation();

  let { loading, data } = useQuery<leaderboard>(GET_LEADERBOARD);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.flex}>
      <View style={styles.navbar}>
        <IconButton
          icon="arrow-left"
          color={COLORS.primaryColor}
          onPress={() => navigate('Profile')}
        />
        <Text weight="medium" style={styles.title}>
          Leaderboard
        </Text>
        <View />
      </View>
      {data?.leaderboard.map((element, index) => {
        return (
          <View style={styles.contentContainer} key={index}>
            <Avatar.Image
              style={styles.avatar}
              source={avatars[Number(element.avatar?.image ?? 0)].image}
            />
            <View style={styles.marginLeft}>
              <Text style={styles.avatarName} weight="medium">
                #{index + 1} {element.name}
              </Text>
              <Text style={styles.score} weight="medium">
                Score: {element.highestScore}
              </Text>
            </View>
          </View>
        );
      })}
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
    backgroundColor: '#105d53',
  },
  avatarName: {
    fontSize: FONT_SIZE.large,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    height: 96,
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 16,
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
  score: {
    marginTop: 8,
    opacity: 0.6,
  },
  title: {
    fontSize: FONT_SIZE.large,
    marginRight: 42,
    marginBottom: 8,
  },
});
