import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginTitulo, Titulo } from '../components/Titulo';
import { formStyles } from '../styles/form';
import * as Token from '../utils/token';
import * as UserData from '../utils/userData';
import { getForumApi } from '../utils/forumApi';
import vars from '../styles/root';
import { UserContext } from '../contexts/user';

export default function Login() {

  const { user, setUser } = useContext(UserContext);

  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const navigation = useNavigation();

  const exibirAlertaNaoCadastrado = () => {
    Alert.alert(
      'Usuário não cadastrado',
      'Por favor, cadastre-se para acessar esta funcionalidade.',
      [
        {
          text: 'OK',
          onPress: () => console.log('Usuário não cadastrado - OK Pressionado')
        }
      ],
      { cancelable: false }
    );
  };

  const handleLogin = async () => {

    const dataToSend = {
      email: emailText,
      password: passwordText
    };

    const fetchData = async () => {
      const forumApi = await getForumApi();
      await forumApi.post('/users/login/', dataToSend)
        .then(async (response) => {
          const data = response.data;
          if (data.token) {
            await Token._storeData(data.token);
            console.log(data.token);
            const dataTreated = treatData(data);

            UserData._storeData(dataTreated);
            setUser(dataTreated);
            navigation.navigate('Dashboard');
          } else {
            let erroMessage = JSON.parse(data.error);
            throw new Error(erroMessage[0]);
          }
        })
        .catch(error => { exibirAlertaNaoCadastrado()});
    };
    await fetchData()
      .then(async () => {
        await Token._retrieveData();
        await UserData._retrieveData();
      });
  };

  const treatData = (data: any) => {
    return {
      id: data.id,
      username: data.username,
      email: data.email,
      profileURL: data.profileURL,
      score: data.score
    };
  };

  const logUser = async () => {
    const data = await UserData._retrieveData();
    if (data) {
      setUser(treatData(data));
      navigation.navigate('Dashboard');
    }
  };

  useEffect(() => {
    logUser();
  }, []);

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
      <LoginTitulo></LoginTitulo>

      <View style={formStyles.cardView}>
        <View style={formStyles.cardTitle}>
          <Text style={formStyles.title}>Entrar na conta</Text>
          <Text style={formStyles.subtitle}>Entre em sua conta abaixo</Text>
        </View>
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