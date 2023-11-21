import React from "react";
import { View, Text, Pressable } from "react-native";
import { Titulo } from "../components/Titulo";
import { PostCard } from "../components/Post";
import { homeStyles } from "../styles/home";
import { profileStyles } from "../styles/profile";

export function Profile() {
  return (
    <View style={homeStyles.containerView}>
      <Titulo></Titulo>
      <View style={profileStyles.background}>
        <View style={profileStyles.picture}></View>
        <View style={profileStyles.info}>
          <Text style={profileStyles.name}>Fulano de num sei o quem</Text>
          <View style={profileStyles.options}>
            <Pressable style={profileStyles.optionsBtn}>
              <Text style={profileStyles.btnText}>Editar</Text>
            </Pressable>
            <Pressable style={[profileStyles.optionsBtn, profileStyles.deletePfBtn]}>
              <Text style={[profileStyles.btnText, profileStyles.deleteBtnText]}>Deletar conta</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={profileStyles.posts}>
        <PostCard></PostCard>
      </View>
    </View>
  );
}