import React from 'react';
import { View, Text, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import { Titulo } from '../components/Titulo';
import { formStyles } from '../styles/form';
import { headerStyles } from '../styles/header';

export default function Login() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Dashboard');
  };

  const Cadastrar = () => {
    navigation.navigate('Cadastrar');
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