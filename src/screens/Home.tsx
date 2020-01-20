import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, IconButton } from 'exoflex';
import { useNavigation } from 'naviflex';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';

export default function Home() {
  let { navigate } = useNavigation();
  let src = require('../../assets/images/home.png');

  return (
    <View style={styles.flex}>
      <View style={styles.navbar}>
        <Text weight="medium" style={styles.title}>
          Welcome
        </Text>
        <View style={styles.center}>
          <Text style={styles.introText}>
            Please press the button below to start playing
          </Text>
          <Text style={styles.introText}>and test yourself</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}>
            <IconButton
              icon="play"
              color={COLORS.primaryColor}
              style={styles.iconPlay}
            />
            <Text weight="medium" style={styles.startQuiz}>
              Start Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={[styles.center, { marginBottom: 50 }]}>
          <Image source={src} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.bottomMenu}
            onPress={() => navigate('Home')}
          >
            <IconButton icon="home" color={COLORS.primaryColor} />
            <Text style={[styles.menuText, { color: COLORS.primaryColor }]}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomMenu}
            onPress={() => navigate('Shop')}
          >
            <IconButton icon="cart" color={COLORS.darkGrey} />
            <Text style={styles.menuText}>Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomMenu}
            onPress={() => navigate('MyProfile')}
          >
            <IconButton icon="account-circle" color={COLORS.darkGrey} />
            <Text style={styles.menuText}>My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  navbar: {
    flex: 3,
    backgroundColor: COLORS.mint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
    fontSize: FONT_SIZE.xxLarge,
    color: COLORS.white,
  },
  introText: {
    opacity: 0.6,
    color: COLORS.white,
  },
  buttonContainer: {
    position: 'absolute',
    top: 255,
    left: 135,
    right: 0,
    bottom: 0,
  },
  buttonStyle: {
    paddingRight: 20,
    borderRadius: 21,
    width: 137,
    height: 42,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconPlay: {
    marginTop: 8,
  },
  startQuiz: {
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.medium,
  },
  body: {
    flex: 5,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  bottomContainer: {
    paddingVertical: 12,
    paddingHorizontal: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: COLORS.grey,
  },
  bottomMenu: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    marginTop: -10,
    fontSize: FONT_SIZE.xxSmall,
  },
});
