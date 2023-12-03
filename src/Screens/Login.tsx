import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Titulo } from '../components/Titulo';
import { formStyles } from '../styles/form';
import { _retrieveData, _storeData } from '../utils/token';
import axios from 'axios';
import host from './host';

export default function Login() {

  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {

    const dataToSend = {
      email: emailText,
      password: passwordText
    };

    const fetchData = async () => {
      await axios.post(`http://${host}:3000/users/login/`, dataToSend)
      .then((response) => {
        if (response.data.token) {
          console.log('Dados recebidos:', response.data);
          _storeData(response.data.token);
          navigation.navigate('Dashboard');
        } else {
          let erroMessage = JSON.parse(response.data.error);
          console.log(erroMessage[0]);
        }
      })
    };
    await fetchData()
    .then(async () => {
      console.log(await _retrieveData());
    });
  };

  const Cadastrar = () => {
    navigation.navigate('Cadastrar');
  };

  function getEmail(EmailText: string) {
    setEmailText(EmailText);
  }

  function getPassword(passwordText: string) {
    setPasswordText(passwordText);
  }

  return (
    <View style={formStyles.containerView}>
      <Titulo></Titulo>

      <View style={formStyles.cardView}>
        <View style={formStyles.cardTitle}>
          <Text style={formStyles.title}>Entrar na conta</Text>
          <Text style={formStyles.subtitle}>Entre em sua conta abaixo</Text>
        </View>
        <Text style={formStyles.label}>Email</Text>
        <TextInput onChangeText={getEmail} style={formStyles.input} inputMode='email' keyboardType='email-address' autoCapitalize='none' autoCorrect={false}/>
        <Text style={formStyles.label}>Senha</Text>
        <TextInput onChangeText={getPassword} style={formStyles.input} secureTextEntry />
        <TouchableOpacity style={formStyles.button} onPress={handleLogin}>
          <Text style={formStyles.bntText}>Entrar</Text>
        </TouchableOpacity>
        <View style={formStyles.changeForm}>
          <Text style={formStyles.changeFormText}>Não tem uma conta ainda?
          </Text>
          <TouchableOpacity onPress={Cadastrar}>
            <Text style={formStyles.changeFormLink}>Crie uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};