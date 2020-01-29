import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { IconButton, Text } from 'exoflex';
import { useNavigation } from 'naviflex';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import { Loading } from '../components';
import { GET_PROFILE_DATA } from '../graphql/queries/myProfileQuery';

export default function SelectLevel() {
  const { navigate, getParam } = useNavigation();
  const category = getParam('category');

  let { loading, data } = useQuery(GET_PROFILE_DATA);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <IconButton
          icon="arrow-left"
          color={COLORS.primaryColor}
          onPress={() => navigate('ChooseCategory')}
        />
        <Text weight="medium" style={styles.title}>
          Select Level
        </Text>
        <View />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        {data?.myProfile.progress[`${category}`] < 1 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 1,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              1
            </Text>
          </TouchableOpacity>
        )}

        {data?.myProfile.progress[`${category}`] < 2 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 2,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              2
            </Text>
          </TouchableOpacity>
        )}

        {data?.myProfile.progress[`${category}`] < 3 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 3,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              3
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        {data?.myProfile.progress[`${category}`] < 4 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 4,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              4
            </Text>
          </TouchableOpacity>
        )}
        {data?.myProfile.progress[`${category}`] < 5 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 5,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              5
            </Text>
          </TouchableOpacity>
        )}
        {data?.myProfile.progress[`${category}`] < 6 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 6,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              6
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        {data?.myProfile.progress[`${category}`] < 7 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 7,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              7
            </Text>
          </TouchableOpacity>
        )}
        {data?.myProfile.progress[`${category}`] < 8 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 8,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              8
            </Text>
          </TouchableOpacity>
        )}
        {data?.myProfile.progress[`${category}`] < 9 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 9,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              9
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        {data?.myProfile.progress[`${category}`] < 10 - 1 ? (
          <View style={styles.lockedLevelsContainer}>
            <Image
              source={require('../../assets/images/lock.png')}
              style={styles.lockedImage}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.levelsContainer}
            onPress={() => {
              navigate('Quiz', {
                category,
                level: 10,
                progress: data?.myProfile.progress[`${category}`],
              });
            }}
          >
            <Text weight="medium" style={styles.levelsNumber}>
              10
            </Text>
          </TouchableOpacity>
        )}
        <View style={{ flex: 1, marginHorizontal: 24 }} />
        <View style={{ flex: 1, marginHorizontal: 24 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  levelsContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.primaryColor,
    borderRadius: 20,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  lockedImage: {
    width: 30,
    height: 42,
  },
  lockedLevelsContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    borderRadius: 20,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  levelsNumber: {
    fontSize: FONT_SIZE.xxLarge,
    color: COLORS.white,
  },
  navbar: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    marginTop: 35,
    paddingLeft: 8,
  },
  title: {
    fontSize: FONT_SIZE.xLarge,
    marginRight: 42,
    marginBottom: 8,
  },
});
