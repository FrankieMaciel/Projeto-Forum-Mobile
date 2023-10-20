import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Login from './Login';
import { formStyles } from '../styles/form';
import { Header } from 'react-native-elements';
import { Titulo } from '../components/Titulo';
import { headerStyles } from '../styles/header';

export default function Cadastro() {

  const navigation = useNavigation();

  const handleCadastro = () => {
    // Coloque aqui a lógica para lidar com o cadastro
    // Por exemplo, você pode fazer uma chamada para uma API para registrar o usuário.

    // Após o cadastro bem-sucedido, você pode navegar para outra tela
    navigation.navigate('Login');
  };

  return (
    <View style={formStyles.containerView}>
      <Header style={headerStyles.header}
        //centerComponent={{text: "Fórum", style: {color:"#000"} }}
        centerComponent={<Titulo />}
      />
      <View style={formStyles.cardView}>
        <Text style={formStyles.label}>Nome</Text>
        <TextInput style={formStyles.input} />
        <Text style={formStyles.label}>Email</Text>
        <TextInput style={formStyles.input} />
        <Text style={formStyles.label}>Senha</Text>
        <TextInput style={formStyles.input} secureTextEntry />
        <Pressable style={formStyles.button} onPress={handleCadastro}>
          <Text style={formStyles.bntText}>Cadastrar</Text>
        </Pressable>
      </View>
      {/* <Button title="Cadastrar" onPress={handleCadastro} color='#afafaf' /> */}
    </View>
  );
};