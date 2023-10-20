import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Login from './Login';
import { Header } from 'react-native-elements';
import { Titulo } from '../components/Titulo';


export default function Cadastro() {

  const navigation = useNavigation();

  const handleCadastro = () => {
    // Coloque aqui a lógica para lidar com o cadastro
    // Por exemplo, você pode fazer uma chamada para uma API para registrar o usuário.

    // Após o cadastro bem-sucedido, você pode navegar para outra tela
    //navigation.navigate("Login");
  };

  return (
    <View>
      <Header
        //centerComponent={{text: "Fórum", style: {color:"#000"} }}
        centerComponent={<Titulo/>}
      />
      

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