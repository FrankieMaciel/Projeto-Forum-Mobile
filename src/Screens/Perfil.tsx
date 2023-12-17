import React, { useContext, useEffect, useState } from "react";
import { View, Text, Pressable, TouchableOpacity, ScrollView } from "react-native";
import { PerfilTitulo, Titulo } from "../components/Titulo";
import { homeStyles } from "../styles/home";
import { profileStyles } from "../styles/profile";
import { useNavigation } from "@react-navigation/native";
import * as UserData from "../utils/userData";
import * as Token from "../utils/token";
import { EditarPerfil } from "../components/CardPerfil";
import { getForumApi, host } from "../utils/forumApi";
import { Image } from 'expo-image';
import { CardMapa } from "../components/CardMapa";
import { UserContext } from "../contexts/user";

export function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [profileURL, setProfileURL] = useState<string | null>(null);
  const [editLocalizationOpen, setLocalizationOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  async function setProfileImge() {
    Image.clearDiskCache();
    Image.clearMemoryCache();
  }

  const Logout = async () => {
    // await UserData._deleteData();
    await Token._deleteData();
    console.log('Usuário deslogado');
    navigation.navigate('Login');
  };

  async function getProfilePic() {
    const imageUrl = `http://${host}:3000/public/custom-pfp/${user.id}.jpg`;
    fetch(imageUrl, {
      method: 'HEAD'
    })
      .then(response => {
        if (response.ok && user.id !== undefined) {
          setProfileURL(imageUrl);
        } else {
          setProfileURL(`http://${host}:3000/public/custom-pfp${user.profileURL}`);
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao verificar a existência da imagem:', error);
      });
  }

  const navigation = useNavigation();

  function VerPostagens() {
    navigation.navigate('Search');
  }

  function openEditModel() {
    setEditProfileOpen(!editProfileOpen);
  }

  function openLocalizationModel() {
    setLocalizationOpen(!editLocalizationOpen);
  }

  function getEditProfileOpen(): boolean {
    return editProfileOpen;
  }

  function getLocalizationOpen(): boolean {
    return editLocalizationOpen;
  }

  useEffect(() => {
    getProfilePic();
  }, []);

  return (
    <View style={homeStyles.screen}>
      {editProfileOpen ? <EditarPerfil
        closeFunc={openEditModel}
        closeUseState={getEditProfileOpen}
        changeUser={setProfileImge}
      /> : null}
      {editLocalizationOpen ? <CardMapa
        closeFunc={openLocalizationModel}
        closeUseState={getLocalizationOpen}
      /> : null}
      <PerfilTitulo logout={Logout} ></PerfilTitulo>
      <View style={homeStyles.containerView}>
        <View style={profileStyles.background}>
          <View style={profileStyles.picture}>
            {
              user ?
                <Image
                  source={profileURL}
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
            <Text style={profileStyles.name}>{user?.username}</Text>
            <Text style={profileStyles.infoText}>{user?.email}</Text>
            <Text style={profileStyles.infoText}>{user?.score} pontos</Text>
            <View style={profileStyles.options}>
            </View>
          </View>
        </View>
        <TouchableOpacity style={[profileStyles.optionsBtn, profileStyles.seePostsBtn]} onPress={VerPostagens}>
          <Text style={[profileStyles.btnText]}>Ver postagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.optionsBtn} onPress={openEditModel}>
          <Text style={profileStyles.btnText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.optionsBtn} onPress={openLocalizationModel}>
          <Text style={profileStyles.btnText}>Adicionar Localização</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[profileStyles.optionsBtn, profileStyles.deletePfBtn]}>
          <Text style={[profileStyles.btnText, profileStyles.deleteBtnText]}>Deletar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}