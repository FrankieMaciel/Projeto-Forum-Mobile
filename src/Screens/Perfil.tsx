import React from "react";
import { View, Text, Pressable } from "react-native";
import { Titulo } from "../components/Titulo";
import { PostCard } from "../components/Post";
import { homeStyles } from "../styles/home";
import { profileStyles } from "../styles/profile";
import { useNavigation } from "@react-navigation/native";

export function Profile() {

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
          <Text style={profileStyles.name}>Fulano de num sei o quem</Text>
          <Text style={profileStyles.infoText}>fulano_sla@email.com</Text>
          <Text style={profileStyles.infoText}>0 pontos</Text>
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
      <Pressable style={[profileStyles.optionsBtn, profileStyles.seePostsBtn]} onPress={VerPostagens}>
        <Text style={[profileStyles.btnText, profileStyles.seePostsBtnText]}>Ver postagens</Text>
      </Pressable>
      {/* <View style={profileStyles.posts}>
        <PostCard></PostCard>
      </View> */}
    </View>
  );
}