import { View, Text, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import { useNavigation } from "@react-navigation/native";
import formatDate from "../utils/dateFormat";
import { PostCardProps } from "../@types/objects";
import { host } from "../utils/forumApi";
import { useEffect, useState } from "react";
import { Image } from 'expo-image';

export function PostCardComment({ user, title, content, date }: PostCardProps) {

  const [profileURL, setProfileURL] = useState<string | null>(null);
  async function getProfilePic() {

    const imageUrl = `http://${host}:3000/public/custom-pfp/${user.userID}.jpg`;
    fetch(imageUrl, {
      method: 'HEAD'
    })
      .then(response => {
        if (response.ok && user.userID !== undefined) {
          setProfileURL(imageUrl);
        } else {
          setProfileURL(`http://${host}:3000/public/custom-pfp${user.profileURL}`);
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao verificar a existência da imagem:', error);
      });
  }

  useEffect(() => {
    getProfilePic();
  }, []);

  const formattedDate = formatDate(date);

  return (

    <View style={[postStyles.containerView, postStyles.commentsPost]}>
      <View style={postStyles.postHeader}>
      <View style={{
            width: 40,
            height: 40,
          }}>
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
            />
          </View>
        <View>
          <Text style={postStyles.headerTitle}>{user.name}</Text>
          <Text style={postStyles.date}>{formattedDate}</Text>
        </View>
      </View>
      <View style={postStyles.textBG}>
        <Text style={postStyles.postTitle}>{title}</Text>
        <Text style={postStyles.postContent}>{content}</Text>
      </View>
    </View>
  );
}