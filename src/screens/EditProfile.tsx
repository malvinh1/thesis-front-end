import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button, Text, TextInput, Toast } from 'exoflex';
import { useNavigation } from 'naviflex';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';

import { GET_PROFILE_DATA } from '../graphql/queries/myProfileQuery';
import { UPDATE_PROFILE } from '../graphql/mutations/updateProfileMutation';

import { myProfile } from '../generated/myProfile';
import {
  UpdateProfile,
  UpdateProfileVariables,
} from '../generated/UpdateProfile';

export default function EditProfileScene() {
  const { navigate } = useNavigation();

  let [email, setEmail] = useState('');
  let [name, setName] = useState('');

  useQuery<myProfile>(GET_PROFILE_DATA, {
    onCompleted: ({ myProfile }) => {
      setEmail(myProfile.email);
      setName(myProfile.name);
    },
  });

  const [updateProfile, { loading }] = useMutation<
    UpdateProfile,
    UpdateProfileVariables
  >(UPDATE_PROFILE, {
    onError: () => {
      Alert.alert('Unexpected Error', 'Please try again', [{ text: 'OK' }], {
        cancelable: false,
      });
    },
  });

  const onSave = async () => {
    await updateProfile({
      variables: {
        name,
        email,
      },
    });
    navigate('Profile');
    Toast.showToast({
      message: 'Your profile has been updated.',
      mode: 'success',
      duration: 1000,
    });
  };

  return (
    <View style={styles.flex}>
      <View style={styles.body}>
        <Text weight="medium" style={styles.title}>
          Edit Profile
        </Text>
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
          autoCapitalize="none"
          autoFocus={true}
          keyboardType="email-address"
          disabled={loading}
        />
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Name"
          value={name}
          onChangeText={setName}
          disabled={loading}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          style={styles.buttonStyle}
          onPress={onSave}
          disabled={loading}
          loading={loading}
        >
          <Text weight="medium" style={styles.buttonText}>
            Save Changes
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  title: {
    marginBottom: 36,
    fontSize: FONT_SIZE.large,
    textAlign: 'center',
  },
  body: {
    flex: 5,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  textInput: {
    marginBottom: 24,
  },
  bottomContainer: {
    marginBottom: 30,
  },
  buttonStyle: {
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium,
    marginLeft: 5,
  },
});
