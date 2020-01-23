import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'exoflex';

import { COLORS } from '../constants/colors';

export const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
