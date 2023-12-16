import { View, Text, Pressable } from "react-native";
import { postStyles } from "../styles/post";
import { useNavigation } from "@react-navigation/native";
import formatDate from "../utils/dateFormat";
import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { PostCardProps } from "../@types/objects";
import { User } from "../@types/objects";
import user from "../contexts/user";
import { profileStyles } from "../styles/profile";
import { host } from "../utils/forumApi";
import { Image } from 'expo-image';


export function UserCard({ id, username, email, score}: User) {

  const navigation = useNavigation();
  console.log(id);
  return (
    <View style={postStyles.containerView}>
      <View style={profileStyles.background}>
          <View style={profileStyles.picture}>
              <Image
                source={`http://${host}:3000/public/custom-pfp/${id}.jpg`}
                contentFit="fill"
                style={
                  {
                    "width": "100%",
                    "height": "100%",
                    borderRadius: 15,
                  }
                }
              />
          </View>
          <View style={profileStyles.info}>
            <Text style={profileStyles.name}>{username}</Text>
            <Text style={profileStyles.infoText}>{email}</Text>
            <Text style={profileStyles.infoText}>{score} pontos</Text>
            <View style={profileStyles.options}>
            </View>
          </View>
    </View>
    </View>
  );
}