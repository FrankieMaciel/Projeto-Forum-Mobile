import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Login from './Login';
import { Header } from 'react-native-elements';
import { Titulo } from '../components/Titulo';
import { formStyles } from '../styles/form';
import { ArrowLeft } from 'react-native-feather';

import axios from 'axios';
import host from './host';

export default function Cadastro() {

  const [emailText, setEmailText] = useState('');
  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const navigation = useNavigation();

  const handleCadastro = async () => {

    const dataToSend = {
      username: usernameText,
      email: emailText,
      password: passwordText
    };

    const fetchData = async () => {
      try {
        // Fazendo uma requisição GET para um endpoint de exemplo
        const response = await axios.post(`http://${host}:3000/user`, dataToSend);
        console.log('Dados recebidos:', response.data);
      } catch (error) {
        // Se ocorrer um erro na requisição
        console.error('Erro ao fazer a requisição:', error);
      }
    };

    // Chame a função para fazer a requisição
    fetchData();
    navigation.navigate('Dashboard');
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

        <Text style={formStyles.label}>Nome</Text>
        <TextInput onChangeText={getUsername} style={formStyles.input} />

        <Text style={formStyles.label}>Email</Text>
        <TextInput onChangeText={getEmail} style={formStyles.input}  inputMode='email' keyboardType='email-address' autoCapitalize='none' autoCorrect={false}/>

        <Text style={formStyles.label}>Senha</Text>
        <TextInput onChangeText={getPassword} style={formStyles.input} secureTextEntry />

        <Text style={formStyles.label}>Repetir senha</Text>
        <TextInput style={formStyles.input} secureTextEntry />

        <Pressable style={formStyles.button} onPress={handleCadastro}>
          <Text style={formStyles.bntText}>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
};