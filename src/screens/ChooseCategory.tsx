import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, IconButton, Avatar } from 'exoflex';
import { useNavigation } from 'naviflex';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';

let topics = [
  {
    title: 'CPR',
    description: 'a lifesaving technique useful in many emergencies situation',
    image: require('../../assets/images/cpr.png'),
  },
  {
    title: 'Burns',
    description:
      'a type of injury to skin, or other tissues, mostly because of fire',
    image: require('../../assets/images/burn.png'),
  },
  {
    title: 'Nose Bleed',
    description: 'bleeding from the blood vessels in the nose',
    image: require('../../assets/images/noseBleed.png'),
  },
  {
    title: 'Bruised',
    description:
      'a common skin injury that results in a discoloration of the skin',
    image: require('../../assets/images/bruise.png'),
  },
  {
    title: 'Open Wound',
    description:
      'an injury involving an external or internal break in body tissue',
    image: require('../../assets/images/openWound.png'),
  },
  {
    title: 'Cramps',
    description: 'a sudden, involuntary muscle contraction or overshortening',
    image: require('../../assets/images/cramp.png'),
  },
];

export default function ChooseCategory() {
  let { navigate } = useNavigation();

  return (
    <ScrollView style={styles.flex}>
      <View style={styles.navbar}>
        <IconButton
          icon="arrow-left"
          color={COLORS.primaryColor}
          onPress={() => navigate('Home')}
        />
        <Text weight="medium" style={styles.title}>
          Choose a Topic
        </Text>
        <View />
      </View>
      {topics.map(
        (
          element: { title: string; description: string; image: string },
          index,
        ) => {
          return (
            <TouchableOpacity
              style={styles.contentContainer}
              key={index}
              onPress={() => {
                navigate('SelectLevel', {
                  category: element.title.replace(/\s/g, ''),
                });
              }}
            >
              <Avatar.Image style={styles.avatar} source={element.image} />
              <View style={styles.marginLeft}>
                <Text style={styles.badgeName} weight="medium">
                  {element.title}
                </Text>
                <Text style={styles.requirement} weight="medium">
                  {element.description}
                </Text>
              </View>
            </TouchableOpacity>
          );
        },
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    backgroundColor: COLORS.primaryColor,
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
  flex: {
    flex: 1,
  },
  marginLeft: {
    maxWidth: 250,
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
    fontSize: FONT_SIZE.xLarge,
    marginRight: 42,
    marginBottom: 8,
  },
});
