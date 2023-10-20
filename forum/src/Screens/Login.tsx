import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import { Titulo } from '../components/Titulo';

export default function Login() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Coloque aqui a lógica para lidar com o Login
    // Por exemplo, você pode fazer uma chamada para uma API para registrar o usuário.

    // Após o Login bem-sucedido, você pode navegar para outra tela
    // navigation.navigate('ExemploScreen');
  };

  return (
    <View>
      <Header
        centerComponent={<Titulo/>}
      />
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};