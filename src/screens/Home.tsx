import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, IconButton } from 'exoflex';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';

export default function Home() {
  return (
    <View style={styles.flex}>
      <View style={styles.navbar}>
        <Text weight="medium" style={styles.title}>
          MediQuiz
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
        <View style={[styles.center, styles.marginBottom]}>
          <Image
            source={require('../../assets/images/home.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 5,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 210,
    left: 0,
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
  center: {
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  iconPlay: {
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  introText: {
    opacity: 0.6,
    color: COLORS.white,
  },
  marginBottom: {
    marginBottom: 50,
  },
  navbar: {
    height: 231,
    backgroundColor: COLORS.mint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
    fontSize: FONT_SIZE.xxLarge,
    color: COLORS.white,
  },
  startQuiz: {
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.medium,
  },
});
