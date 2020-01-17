import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'exoflex';
import { useNavigation } from 'naviflex';
import { useMutation } from '@apollo/react-hooks';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { REGISTER_USER } from '../graphql/mutations/registerMutation';
import { Register_register, RegisterVariables } from '../generated/Register';

export default function Register() {
  let { navigate } = useNavigation();
  let [nameValue, setNameValue] = useState('');
  let [emailValue, setEmailValue] = useState('');
  let [passwordValue, setPasswordValue] = useState('');
  let [rePasswordValue, setRePasswordValue] = useState('');

  const [register, { loading: loadingRegister }] = useMutation<
    Register_register,
    RegisterVariables
  >(REGISTER_USER, {
    onCompleted() {
      navigate('Login');
    },
    onError(error) {
      console.log(error.message);
    },
  });

  let onPressRegister = async () => {
    await register({
      variables: {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        avatarId: 'ck5hmp3kp001a0767yad1y8xk',
      },
    });
  };

  let onChangeTextName = (text: string) => setNameValue(text);
  let onChangeTextEmail = (text: string) => setEmailValue(text);
  let onChangeTextPassword = (text: string) => setPasswordValue(text);
  let onChangeTextRePassword = (text: string) => setRePasswordValue(text);

  return (
    <View style={styles.flex}>
      <View style={styles.body}>
        <Text weight="medium" style={styles.title}>
          Register
        </Text>
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Name"
          value={nameValue}
          onChangeText={onChangeTextName}
          autoFocus={true}
          autoCapitalize="words"
        />
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
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Re-enter Password"
          value={rePasswordValue}
          onChangeText={onChangeTextRePassword}
          textContentType="password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button style={styles.buttonStyle} onPress={onPressRegister}>
          <Text weight="medium" style={styles.buttonText}>
            Create an Account
          </Text>
        </Button>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>{'Already have an account?'}</Text>
          <Text
            weight="bold"
            style={styles.loginText}
            onPress={() => navigate('Login')}
          >
            {'  Log In Here'}
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
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  loginText: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.primaryColor,
  },
});
