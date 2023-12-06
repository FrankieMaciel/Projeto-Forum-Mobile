import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Titulo } from "../components/Titulo";
import { PostCard } from "../components/Post";
import { homeStyles } from "../styles/home";
import { profileStyles } from "../styles/profile";
import { useNavigation } from "@react-navigation/native";
import * as UserData from "../utils/userData";
import * as Token from "../utils/token"

export function Profile() {
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [profileScore, setProfileScore] = useState(0);

  const GetProfileInfo = async () => {
    const userInfo = await UserData._retrieveData();
    console.log(userInfo);

    setProfileName(userInfo.username);
    setProfileEmail(userInfo.email);
    setProfileScore(userInfo.score);
  }

  useEffect(() => {
    GetProfileInfo();
  }, [])

  const Logout = async () => {
    await UserData._deleteData();
    await Token._deleteData();
    console.log('Usuário deslogado');
    navigation.navigate('Login');
  }

  const navigation = useNavigation();

  function VerPostagens() {
    navigation.navigate('Search');
  }

  return (
    <View style={homeStyles.containerView}>
      <Titulo></Titulo>
      <View style={profileStyles.background}>
        <View style={profileStyles.picture}></View>
        <View style={profileStyles.info}>
          <Text style={profileStyles.name}>{profileName}</Text>
          <Text style={profileStyles.infoText}>{profileEmail}</Text>
          <Text style={profileStyles.infoText}>{profileScore} pontos</Text>
          <View style={profileStyles.options}>
            <Pressable style={profileStyles.optionsBtn}>
              <Text style={profileStyles.btnText}>Editar Perfil</Text>
            </Pressable>
            <Pressable style={profileStyles.optionsBtn} onPress={Logout}>
              <Text style={profileStyles.btnText}>Sair</Text>
            </Pressable>
            <Pressable style={[profileStyles.optionsBtn, profileStyles.deletePfBtn]}>
              <Text style={[profileStyles.btnText, profileStyles.deleteBtnText]}>Deletar conta</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable style={[profileStyles.optionsBtn, profileStyles.seePostsBtn]} onPress={VerPostagens}>
        <Text style={[profileStyles.btnText, profileStyles.seePostsBtnText]}>Ver postagens</Text>
      </Pressable>
      {/* <View style={profileStyles.posts}>
        <PostCard></PostCard>
      </View> */}
    </View>
  );
}