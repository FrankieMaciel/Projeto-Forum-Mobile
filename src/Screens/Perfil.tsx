import React, { useEffect, useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { PerfilTitulo, Titulo } from "../components/Titulo";
import { PostCard } from "../components/Post";
import { homeStyles } from "../styles/home";
import { profileStyles } from "../styles/profile";
import { useNavigation } from "@react-navigation/native";
import * as UserData from "../utils/userData";
import * as Token from "../utils/token"
import { getForumApi } from "../utils/forumApi";
import * as ImagePicker from 'expo-image-picker';

export function Profile() {
  const [profileImage, setprofileImage] = useState<String>();
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [profileScore, setProfileScore] = useState(0);
  const [editProfileOpen, setEditProfileOpen] = useState(false);

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

  async function uploadImageProfile() {
    if (!profileImage) return;
    const formData = new FormData();
    // formData.append('image',
    //   {
    //     type:'image/jpg',
    //     name:'userProfile.jpg',
    //     uri:profileImage,
    //   });

    const forumApi = await getForumApi();
    await forumApi.post('/user/edit', formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response): void => {

      })
      .catch(error => console.error(error));
  }

  const handleChoosePhoto = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    console.log(_image);
    if (!_image.canceled) {
      setprofileImage(_image.assets[0].uri);
    }
  };

  const navigation = useNavigation();

  function VerPostagens() {
    navigation.navigate('Search');
  }

  function openEditModel() {
    setEditProfileOpen(!editProfileOpen);
  }

  return (
    <View style={homeStyles.screen}>
      <PerfilTitulo logout={Logout} ></PerfilTitulo>
      <View style={homeStyles.containerView}>
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