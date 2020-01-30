import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { Text, Avatar } from 'exoflex';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { avatars } from '../constants/avatars';

import { GET_AVATARS } from '../graphql/queries/avatarsQuery';

import { Avatars } from '../generated/Avatars';
import { Loading } from '../components';

export default function Home() {
  const { loading, data } = useQuery<Avatars>(GET_AVATARS);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.flex}>
      <View style={styles.navbar}>
        <Text weight="medium" style={styles.title}>
          Shop
        </Text>
        <View style={styles.center}>
          <Text style={styles.introText}>
            {
              "Select and buy the avatar that you like using the coin that you've collected!"
            }
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 24, marginBottom: 230 }}>
        {
          <FlatList
            data={data?.avatars ?? []}
            contentInsetAdjustmentBehavior="always"
            renderItem={({ item, index }) => {
              return (
                <View style={styles.contentContainer} key={index}>
                  <Avatar.Image
                    style={styles.avatar}
                    source={avatars[Number(item.image)].image}
                  />
                  <View style={styles.marginLeft}>
                    <Text style={styles.avatarName} weight="medium">
                      {avatars[index + 1].name}
                    </Text>
                    <View style={styles.coins}>
                      <View style={styles.yellowCoin} />
                      <Text>{item.price}</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.buyTextContainer}>
                    <Text weight="medium" style={styles.buyText}>
                      BUY
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        }
      </View>
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
    backgroundColor: COLORS.grey,
  },
  avatarName: {
    fontSize: FONT_SIZE.large,
  },
  buyText: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.primaryColor,
  },
  buyTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 16,
  },
  coins: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  center: {
    alignItems: 'center',
    marginHorizontal: 24,
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
  introText: {
    color: COLORS.white,
    opacity: 0.7,
    textAlign: 'center',
  },
  marginLeft: {
    marginLeft: 16,
  },
  navbar: {
    height: 231,
    backgroundColor: COLORS.mint,
    paddingTop: 75,
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
    fontSize: FONT_SIZE.xxLarge,
    color: COLORS.white,
  },
  yellowCoin: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.marigold,
    borderRadius: 5,
    marginRight: 8,
  },
});
