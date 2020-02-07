import React, { useEffect } from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from 'naviflex';

import asyncStorage from '../helpers/asyncStorage';

export default function Welcome() {
  const { navigate } = useNavigation();

  const nextScreen = () => navigate('Welcome');

  useEffect(() => {
    const getToken = async () => {
      let token = await asyncStorage.getToken();
      if (token) {
        navigate('Home');
        return;
      }
    };
    getToken();
  }, [navigate]);

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/images/onBoarding1.png')}
              style={{ width: '100%', height: 300 }}
            />
          ),
          title: 'WELCOME',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/images/onBoarding2.png')}
              style={{ width: '100%', height: 300 }}
            />
          ),
          title: "You're the hero",
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/images/onBoarding3.png')}
              style={{ width: '100%', height: 300 }}
            />
          ),
          title: "Let's Get Started!",
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
      onDone={nextScreen}
      onSkip={nextScreen}
    />
  );
}
