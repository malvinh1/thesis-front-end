/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Text, Button } from 'exoflex';
import { useNavigation } from 'naviflex';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import asyncStorage from '../helpers/asyncStorage';

export default function Welcome() {
  let { navigate } = useNavigation();

  let src = require('../../assets/images/welcomeAsset.png');

  let timeOut = async () => {
    let token = await asyncStorage.getToken();
    if (token) {
      navigate('Home');
      return;
    }
  };
  timeOut();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text weight="bold" style={styles.title}>
          Welcome to MediQuiz
        </Text>

        <Image source={src} style={styles.imageWelcome} />
      </View>

      <View style={styles.bottomContainer}>
        <Button
          style={styles.buttonDefaultStyle}
          onPress={() => navigate('Login')}
        >
          <Text weight="bold" style={styles.buttonText}>
            Login
          </Text>
        </Button>
        <View style={styles.buttonSeparator} />
        <Button
          style={styles.buttonDefaultStyle}
          onPress={() => navigate('Register')}
        >
          <Text weight="bold" style={styles.buttonText}>
            Register
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDefaultStyle: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: 8,
    marginHorizontal: 24,
    minWidth: 120,
  },
  title: {
    marginBottom: 120,
    fontSize: FONT_SIZE.xxLarge,
    color: COLORS.primaryColor,
  },
  imageWelcome: {
    aspectRatio: 1,
    width: 200,
    height: undefined,
  },
  bottomContainer: {
    marginBottom: 36,
  },
  buttonSeparator: {
    height: 16,
  },
  buttonText: {
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});
