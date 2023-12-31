import { View, Text, Pressable } from "react-native";
import { postStyles } from "../styles/post";
import { useNavigation } from "@react-navigation/native";
import formatDate from "../utils/dateFormat";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../contexts/post";
import { PostCardProps } from "../@types/objects";
import { User } from "../@types/objects";
import user from "../contexts/user";
import { profileStyles } from "../styles/profile";
import { host } from "../utils/forumApi";
import { Image } from 'expo-image';

interface ViewPostCardProps extends User {
  selectPost: (id: string) => void;
}


export function UserCard({ id, profileURL, username, email, score, selectPost }: ViewPostCardProps) {

  const [myprofileURL, setmyProfileURL] = useState<string | null>(null);

  const navigation = useNavigation();

  selectPost(id);

  async function getProfilePic() {
    const imageUrl = `http://${host}:3000/public/custom-pfp/${id}.jpg`;
    fetch(imageUrl, {
      method: 'HEAD'
    })
      .then(response => {
        if (response.ok && id !== undefined) {
          setmyProfileURL(imageUrl);
        } else {
          setmyProfileURL(`http://${host}:3000/public/custom-pfp${profileURL}`);
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao verificar a existência da imagem:', error);
      });
  }

  useEffect(() => {
    getProfilePic();
  }, []);

  return (
    <View style={postStyles.containerView}>
      <View style={profileStyles.background}>
        <View style={profileStyles.picture}>
          <Image
            source={myprofileURL}
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