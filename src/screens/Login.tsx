import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button, ActivityIndicator, Modal } from 'exoflex';
import { useNavigation } from 'naviflex';
import { useMutation } from '@apollo/react-hooks';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { LOGIN_USER } from '../graphql/mutations/loginMutation';
import { LoginVariables, Login } from '../generated/Login';
import { validateEmail, validatePassword } from '../helpers/validation';
import asyncStorage from '../helpers/asyncStorage';

export default function LoginScene() {
  let { navigate } = useNavigation();
  let [emailValue, setEmailValue] = useState('');
  let [passwordValue, setPasswordValue] = useState('');

  const [login, { loading: loadingLogin }] = useMutation<Login, LoginVariables>(
    LOGIN_USER,
    {
      onCompleted({ login }) {
        if (login.token) {
          asyncStorage.saveToken(login.token);
          navigate('Home');
        } else {
          Alert.alert(
            'Unexpected Error',
            'Please try again',
            [{ text: 'OK' }],
            {
              cancelable: false,
            },
          );
        }
      },
      onError(error) {
        let newError = error.message.split(':');
        Alert.alert(newError[1]);
      },
    },
  );

  let onPressLogin = async () => {
    if (validateEmail(emailValue) && validatePassword(passwordValue)) {
      await login({
        variables: {
          email: emailValue,
          password: passwordValue,
        },
      });
    } else if (!validateEmail(emailValue)) {
      Alert.alert(
        'Email is not valid',
        'Please fill the email again',
        [{ text: 'OK' }],
        { cancelable: false },
      );
    } else if (!validatePassword(passwordValue)) {
      Alert.alert(
        'Password is not valid',
        'Please fill the password again',
        [{ text: 'OK' }],
        { cancelable: false },
      );
    } else {
      Alert.alert('Unexpected Error', 'Please try again', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  };

  return (
    <View style={styles.flex}>
      <Modal
        contentContainerStyle={styles.modalContainer}
        animationType="fade"
        visible={loadingLogin}
      >
        <ActivityIndicator size="large" color={COLORS.primaryColor} />
      </Modal>
      <View style={styles.body}>
        <Text weight="medium" style={styles.title}>
          Log In
        </Text>
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Email Address"
          value={emailValue}
          onChangeText={setEmailValue}
          textContentType="emailAddress"
          autoCapitalize="none"
          autoFocus={true}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Password"
          value={passwordValue}
          onChangeText={setPasswordValue}
          textContentType="password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button style={styles.buttonStyle} onPress={onPressLogin}>
          <Text weight="medium" style={styles.buttonText}>
            Log In
          </Text>
        </Button>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>{"Don't have an account?"}</Text>
          <Text
            weight="bold"
            style={styles.registerText}
            onPress={() => navigate('Register')}
          >
            {'  Register Here'}
          </Text>
        </View>
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
  bottomTextContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: COLORS.darkWhite,
  },
  buttonStyle: {
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: COLORS.primaryColor,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.medium,
  },
});
