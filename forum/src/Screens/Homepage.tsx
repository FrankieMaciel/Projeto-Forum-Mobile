import React from "react";
import { View } from "react-native";
import { HomeTitulo } from "../components/Titulo";
import { homeStyles } from "../styles/home";
import vars from "../styles/root";
import { PostCard } from "../components/Post";

export function Homepage() {
  return (
    <View style={homeStyles.containerView}>
      <HomeTitulo></HomeTitulo>
      <PostCard></PostCard>
    </View>
  );
}
