import React from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import { Titulo } from '../components/Titulo';
import { formStyles } from '../styles/form';
import { headerStyles } from '../styles/header';

export default function Login() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Coloque aqui a lógica para lidar com o Login
    // Por exemplo, você pode fazer uma chamada para uma API para registrar o usuário.

    // Após o Login bem-sucedido, você pode navegar para outra tela
    navigation.navigate('Homepage');
  };

  return (
    <View style={formStyles.containerView}>
        <Titulo></Titulo>
    
      <View style={formStyles.cardView}>
        <View style={formStyles.cardTitle}>
          <Text style={formStyles.title}>Entrar na conta</Text>
          <Text style={formStyles.subtitle}>Entre em sua conta abaixo</Text>
        </View>
        <Text style={formStyles.label}>Email</Text>
        <TextInput style={formStyles.input} />
        <Text style={formStyles.label}>Senha</Text>
        <TextInput style={formStyles.input} secureTextEntry />
        <Pressable style={formStyles.button} onPress={handleLogin}>
          <Text style={formStyles.bntText}>Entrar</Text>
        </Pressable>
      </View>
      {/* <Button title="Cadastrar" onPress={handleCadastro} color='#afafaf' /> */}
    </View>
  );
};