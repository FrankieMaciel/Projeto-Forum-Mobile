import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Titulo } from '../components/Titulo';
import { formStyles } from '../styles/form';
import { ArrowLeft } from 'react-native-feather';
import * as Token from '../utils/token';
import * as UserData from '../utils/userData';
import axios from 'axios';
import { getForumApi } from '../utils/forumApi';
import vars from '../styles/root';

export default function Cadastro() {

  const [emailText, setEmailText] = useState('');
  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsDifferent, setPasswordsDifferent] = useState(false)

  const navigation = useNavigation();

  const handleCadastro = async () => {
    if (passwordText !== repeatPassword) {
      setPasswordsDifferent(true);
      return;
    }
    setPasswordsDifferent(false);

    const dataToSend = {
      username: usernameText,
      email: emailText,
      password: passwordText
    };

    const fetchData = async () => {
      const forumApi = await getForumApi();
      await forumApi.post('/users', dataToSend)
        .then(async (response) => {
          const data = response.data;
          console.log('Dados recebidos:', data);
          if (data.token) {
            console.log(data);
            await Token._storeData(data.token);
            await UserData._storeData({
              id: data.id,
              username: data.username,
              email: data.email,
              profileURL: data.pfpURL,
              score: 0
            })
            navigation.navigate('Dashboard');
          } else {
            let erroMessage = JSON.parse(data.error);
            console.log(erroMessage[0]);
          }
        })
    };
    fetchData();
  };

  function Login() {
    navigation.navigate('Login');
  }

  function getEmail(EmailText: string) {
    setEmailText(EmailText);
  }

  function getUsername(usernameText: string) {
    setUsernameText(usernameText);
  }

  function getPassword(passwordText: string) {
    setPasswordText(passwordText);
  }

  function getRepeatPassword(repeatPassword: string) {
    setRepeatPassword(repeatPassword)
  }

  return (
    <View style={formStyles.containerView}>
      <Titulo></Titulo>
      <TouchableOpacity style={formStyles.arrowBack} onPress={Login}>
        <ArrowLeft
          fill="#00000000"
          stroke="#fff"
        />
        <Text style={formStyles.backText}>Voltar</Text>
      </TouchableOpacity>
      <View style={formStyles.cardView}>
        <View style={formStyles.cardTitle}>
          <Text style={formStyles.title}>Criar conta</Text>
          <Text style={formStyles.subtitle}>Crie sua conta abaixo</Text>
        </View>

        <TextInput
          onChangeText={getUsername}
          style={formStyles.input}
          placeholder='Nome'
          placeholderTextColor={vars.textLight}
        />

        <TextInput
          onChangeText={getEmail}
          style={formStyles.input}
          inputMode='email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email'
          placeholderTextColor={vars.textLight}
        />

        <TextInput
          onChangeText={getPassword}
          style={formStyles.input}
          placeholder='Senha'
          placeholderTextColor={vars.textLight}
          secureTextEntry
        />

        <TextInput
          onChangeText={getRepeatPassword}
          style={formStyles.input}
          placeholder='Repetir senha'
          placeholderTextColor={vars.textLight}
          secureTextEntry
        />
        <Text style={formStyles.passwordsDifferent}>
          {passwordsDifferent ? '* As senhas não são iguais!' : ''}
        </Text>

        <Pressable style={formStyles.button} onPress={handleCadastro}>
          <Text style={formStyles.bntText}>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
};