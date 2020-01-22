import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Avatar } from 'exoflex';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import asyncStorage from '../helpers/asyncStorage';
import { useNavigation } from 'naviflex';

let avatar = 'detective.png';

export default function MyProfile() {
  let { navigate } = useNavigation();

  const onLogout = async () => {
    await asyncStorage.removeToken();
    navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.topFont} weight="medium">
            Score: 1283
          </Text>
          <View style={styles.points}>
            <View style={styles.yellowCoin} />
            <Text style={styles.topFont} weight="medium">
              1283
            </Text>
          </View>
        </View>
        <View style={styles.avatar}>
          <Avatar.Image
            source={require(`../../assets/images/${avatar}`)}
            size={120}
          ></Avatar.Image>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.name} weight="medium">
            Jerry Thomson
          </Text>
          <Text style={styles.email}>jerry.thomson@gmail.com</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.menuTextContainer}>
            <Image
              source={require('../../assets/images/badge.png')}
              style={styles.badge}
            />
            <Text style={styles.menuText} weight="medium">
              View My Badge
            </Text>
          </View>

          <View style={styles.menuTextContainer}>
            <Image
              source={require('../../assets/images/leaderboard.png')}
              style={styles.asset}
            />
            <Text style={styles.menuText} weight="medium">
              Leaderboard
            </Text>
          </View>
        </View>
        <View style={styles.logOutMenu}>
          <TouchableOpacity style={styles.menuTextContainer} onPress={onLogout}>
            <Image
              source={require('../../assets/images/logout.png')}
              style={styles.asset}
            />
            <Text style={styles.menuText} weight="medium">
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  asset: {
    width: 20,
    height: 20,
  },
  avatar: {
    marginVertical: 18,
    alignItems: 'center',
  },
  badge: {
    height: 24,
    width: 22,
  },
  container: {
    flex: 1,
  },
  content: {
    marginTop: 28,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 3,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  email: {
    color: COLORS.white,
    opacity: 0.8,
  },
  logOutMenu: {
    marginTop: 26,
  },
  menuText: {
    color: COLORS.black,
    fontSize: FONT_SIZE.medium,
    marginBottom: 31,
    marginLeft: 18,
  },
  menuTextContainer: {
    flexDirection: 'row',
    marginLeft: 24,
  },
  name: {
    color: COLORS.white,
    fontSize: FONT_SIZE.large,
    marginBottom: 8,
  },
  points: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topFont: {
    color: COLORS.white,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 24,
  },
  userInfoContainer: {
    backgroundColor: COLORS.primaryColor,
    height: 281,
  },
  yellowCoin: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.marigold,
    borderRadius: 5,
    marginRight: 8,
  },
});
