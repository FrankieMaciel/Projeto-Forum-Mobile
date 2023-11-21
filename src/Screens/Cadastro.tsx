import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Login from './Login';
import { Header } from 'react-native-elements';
import { Titulo } from '../components/Titulo';
import { formStyles } from '../styles/form';

import axios from 'axios';

const host = '192.168.2.3';

export default function Cadastro() {

  const navigation = useNavigation();

  const handleCadastro = async () => {
    
    const dataToSend = {
      username: 'sabaocracra',
      email: 'sabao@gmail.com',
      password: '12345'
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
    navigation.navigate('Login');
  };

  return (
    <View style={formStyles.containerView}>
      <Titulo></Titulo>
      <View style={formStyles.cardView}>
        <View style={formStyles.cardTitle}>
          <Text style={formStyles.title}>Criar conta</Text>
          <Text style={formStyles.subtitle}>Crie sua conta abaixo</Text>
        </View>

        <Text style={formStyles.label}>Nome</Text>
        <TextInput style={formStyles.input} />
        
        <Text style={formStyles.label}>Email</Text>
        <TextInput style={formStyles.input} />

        <Text style={formStyles.label}>Senha</Text>
        <TextInput style={formStyles.input} secureTextEntry />

        <Text style={formStyles.label}>Repetir senha</Text>
        <TextInput style={formStyles.input} secureTextEntry />
        
        <Pressable style={formStyles.button} onPress={handleCadastro}>
          <Text style={formStyles.bntText}>Cadastrar</Text>
        </Pressable>
      </View>
      {/* <Button title="Cadastrar" onPress={handleCadastro} color='#afafaf' /> */}
    </View>
  );
};