import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import {
  Home,
  Shop,
  MyProfile,
  Login,
  Register,
  Welcome,
  Leaderboard,
  About,
  BadgeCollection,
  ChooseCategory,
  SelectLevel,
  Quiz,
  EditProfile,
  OnBoarding,
} from '../screens';
import { COLORS } from '../constants/colors';

import Icon from 'react-native-vector-icons/Ionicons';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <View>
              <Icon style={{ color: tintColor }} size={25} name={'ios-home'} />
            </View>
          );
        },
      },
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <View>
              <Icon style={{ color: tintColor }} size={25} name={'ios-cart'} />
            </View>
          );
        },
      },
    },
    Profile: {
      screen: MyProfile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <View>
              <Icon
                style={{ color: tintColor }}
                size={25}
                name={'ios-person'}
              />
            </View>
          );
        },
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <View>
              <Icon
                style={{ color: tintColor }}
                size={25}
                name={'ios-information-circle-outline'}
              />
            </View>
          );
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: COLORS.primaryColor,
    inactiveColor: COLORS.darkGrey,
    barStyle: {
      backgroundColor: COLORS.white,
      borderTopWidth: 3,
      borderTopColor: COLORS.grey,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
    Badge: BadgeCollection,
    ChooseCategory: ChooseCategory,
    EditProfile: EditProfile,
    Leaderboard: Leaderboard,
    Onboarding: OnBoarding,
    SelectLevel: SelectLevel,
    Quiz: Quiz,
    Welcome: Welcome,
  },
  {
    initialRouteName: 'Onboarding',
  },
);

const NativeRouter = createAppContainer(AppNavigator);

export default NativeRouter;
