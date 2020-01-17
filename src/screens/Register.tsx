import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button, ActivityIndicator, Modal } from 'exoflex';
import { useNavigation } from 'naviflex';
import { useMutation } from '@apollo/react-hooks';

import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { REGISTER_USER } from '../graphql/mutations/registerMutation';
import { Register_register, RegisterVariables } from '../generated/Register';
import { validateEmail, validatePassword } from '../helpers/validation';

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
      let newError = error.message.split(':');
      Alert.alert(newError[1]);
    },
  });

  let onPressRegister = async () => {
    if (validateEmail(emailValue) && validatePassword(passwordValue)) {
      await register({
        variables: {
          name: nameValue,
          email: emailValue,
          password: passwordValue,
          avatarId: 'ck5hswuojxdwt0b00qftbbjiu',
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
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        animationType="fade"
        visible={loadingRegister}
      >
        <ActivityIndicator size="large" color={COLORS.primaryColor} />
      </Modal>
      <View style={styles.body}>
        <Text weight="medium" style={styles.title}>
          Register
        </Text>
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Name"
          value={nameValue}
          onChangeText={setNameValue}
          autoFocus={true}
          autoCapitalize="words"
        />
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Email Address"
          value={emailValue}
          onChangeText={setEmailValue}
          textContentType="emailAddress"
          autoCapitalize="none"
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
        <TextInput
          style={styles.flex}
          containerStyle={styles.textInput}
          label="Re-enter Password"
          value={rePasswordValue}
          onChangeText={setRePasswordValue}
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
