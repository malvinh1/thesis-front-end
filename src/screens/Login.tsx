import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'exoflex';
import { useNavigation } from 'naviflex';
import { useMutation } from '@apollo/react-hooks';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { LOGIN_USER } from '../graphql/mutations/loginMutation';
import { Login_login, LoginVariables } from '../generated/Login';

export default function Login() {
  let { navigate } = useNavigation();
  let [emailValue, setEmailValue] = useState('');
  let [passwordValue, setPasswordValue] = useState('');

  const [login, { loading: loadingLogin }] = useMutation<
    Login_login,
    LoginVariables
  >(LOGIN_USER, {
    onCompleted() {
      navigate('Home');
    },
    onError(error) {
      // TODO
      console.log(error.message);
    },
  });

  let onChangeTextEmail = (text: string) => setEmailValue(text);
  let onChangeTextPassword = (text: string) => setPasswordValue(text);

  let onPressLogin = async () => {
    await login({
      variables: {
        email: emailValue,
        password: passwordValue,
      },
    });
  };

  return (
    <View style={styles.flex}>
      <View style={styles.body}>
        <Text weight="medium" style={styles.title}>
          Log In
        </Text>
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Email Address"
          value={emailValue}
          onChangeText={onChangeTextEmail}
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
          onChangeText={onChangeTextPassword}
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
  registerText: {
    color: COLORS.primaryColor,
    fontSize: FONT_SIZE.medium,
  },
});
