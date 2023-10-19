import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';

export default function Cadastro() {
  const navigation = useNavigation();

  const handleCadastro = () => {
    // Coloque aqui a lógica para lidar com o cadastro
    // Por exemplo, você pode fazer uma chamada para uma API para registrar o usuário.

    // Após o cadastro bem-sucedido, você pode navegar para outra tela
    // navigation.navigate("Login", {});
  };

  return (
    <View>
      <Text>Nome</Text>
      <TextInput />
      <Text>Email</Text>
      <TextInput />
      <Text>Senha</Text>
      <TextInput secureTextEntry />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};