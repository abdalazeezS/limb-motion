import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { login } from '../firebase/auth';
import { Button } from 'react-native-paper';

const Login = ({ navigation }: any) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    login(email, password)
      .then(res => {
        navigation.navigate('Home');
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.loginTitle}>{t('LOGIN')}</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Email'
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button style={styles.loginBtn} mode='contained' onPress={onSubmit}>
        Login
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  textInput: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    width: '100%',
    paddingVertical: 16,
    marginBottom: 8
  },
  loginTitle: {
    fontSize: 32,
    marginBottom: 24
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20
  },
  loginBtnText: {
    color: 'white',
    fontSize: 18,
    width: '100%'
  },
  loginBtn: {
    paddingVertical: 6,
    width: '100%',
    display: 'flex',
    borderRadius: 6,
  }
});

export default Login