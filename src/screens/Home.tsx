import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, IconButton } from 'exoflex';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { useNavigation } from 'naviflex';

export default function Home() {
  let { navigate } = useNavigation();
  return (
    <View style={styles.flex}>
      <View style={styles.navbar}>
        <View style={styles.center}>
          <Text weight="medium" style={styles.title}>
            MediQuiz
          </Text>
          <Text style={styles.introText}>
            Please press the button below to start playing {'\n'}and test
            yourself
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigate('ChooseCategory')}
        >
          <View style={styles.buttonStyle}>
            <IconButton
              icon="play"
              color={COLORS.primaryColor}
              style={styles.iconPlay}
            />
            <Text weight="medium" style={styles.startQuiz}>
              Start Quiz
            </Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: 'center',
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
    color: COLORS.white,
    opacity: 0.6,
    textAlign: 'center',
  },
  marginBottom: {
    marginBottom: 50,
  },
  navbar: {
    height: 265,
    backgroundColor: COLORS.mint,
  },
  title: {
    color: COLORS.white,
    fontSize: FONT_SIZE.xxLarge,
    marginTop: 75,
    marginBottom: 16,
  },
  startQuiz: {
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.medium,
  },
});
