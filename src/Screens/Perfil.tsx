import React, { useEffect, useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { PerfilTitulo, Titulo } from "../components/Titulo";
import { homeStyles } from "../styles/home";
import { profileStyles } from "../styles/profile";
import { useNavigation } from "@react-navigation/native";
import * as UserData from "../utils/userData";
import * as Token from "../utils/token"
import { EditarPerfil } from "../components/CardPerfil";
import { User } from "../@types/objects";
import { getForumApi, host } from "../utils/forumApi";
import { Image } from 'expo-image';

export function Profile() {
  const [user, setUser] = useState<User>();
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  
  const GetProfileInfo = async () => {
    const userInfo = await UserData._retrieveData();

    let user: User = {
      id: userInfo.id,
      name: userInfo.username,
      profileImage: null,
      email: userInfo.email,
      score: userInfo.score,
    }

    if (user.id == undefined) user.id = "undefined";
    user.profileImage = `http://${host}:3000/public/custom-pfp/${user.id}.jpg`;
    console.log(user);
    setUser(user);
  }

  async function setProfileImge() {
    Image.clearDiskCache();
    Image.clearMemoryCache();
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

  function openEditModel() {
    setEditProfileOpen(!editProfileOpen);
  }

  function getEditProfileOpen(): boolean {
    return editProfileOpen;
  }

  return (
    <View style={homeStyles.screen}>
      {editProfileOpen ? <EditarPerfil 
      user={user}
      closeFunc={openEditModel}
      closeUseState={getEditProfileOpen}
      changeUser={setProfileImge}
      /> : null}         
      <PerfilTitulo logout={Logout} ></PerfilTitulo>
      <View style={homeStyles.containerView}>
        <View style={profileStyles.background}>
          <View style={profileStyles.picture}>
            {
            user ?
            <Image
            source={user.profileImage}
            contentFit="fill"
            style={
              {
                "width": "100%",
                "height": "100%",
                borderRadius: 15,
              }
            }
            /> : null
          }
          </View>
          <View style={profileStyles.info}>
            <Text style={profileStyles.name}>{user?.name}</Text>
            <Text style={profileStyles.infoText}>{user?.email}</Text>
            <Text style={profileStyles.infoText}>{user?.score} pontos</Text>
            <View style={profileStyles.options}>
              <TouchableOpacity style={profileStyles.optionsBtn} onPress={openEditModel}>
                <Text style={profileStyles.btnText}>Editar Perfil</Text>
              </TouchableOpacity>
              <Pressable style={[profileStyles.optionsBtn, profileStyles.deletePfBtn]}>
                <Text style={[profileStyles.btnText, profileStyles.deleteBtnText]}>Deletar conta</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity onPress={handleChoosePhoto}>
                <Text style={profileStyles.btnText}>Escolher foto</Text>
              </TouchableOpacity>
              <Pressable style={profileStyles.optionsBtn} onPress={uploadImageProfile}>
                <Text style={profileStyles.btnText}>Fazer upload</Text>
              </Pressable> */}
        <Pressable style={[profileStyles.optionsBtn, profileStyles.seePostsBtn]} onPress={VerPostagens}>
          <Text style={[profileStyles.btnText, profileStyles.seePostsBtnText]}>Ver postagens</Text>
        </Pressable>
        {/* <View style={profileStyles.posts}>
        <PostCard></PostCard>
      </View> */}
      </View>
    </View>
  );
}