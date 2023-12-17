import { View, Text, Pressable } from "react-native";
import { postStyles } from "../styles/post";
import { useNavigation } from "@react-navigation/native";
import formatDate from "../utils/dateFormat";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../contexts/post";
import { PostCardProps } from "../@types/objects";
import { Image } from 'expo-image';
import { host } from "../utils/forumApi";

export function PostCard({ id, user, title, content, date }: PostCardProps) {
  const { post, setPost } = useContext(PostContext);
  const [profileURL, setProfileURL] = useState<string | null>(null);

  const navigation = useNavigation();

  const formattedDate = formatDate(date);

  function handleComments(): void {
    setPost({ id, user, title, content, date });
    navigation.navigate('Comments');
  }

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

  return (
    <View style={postStyles.containerView}>
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
      <View>
        <Pressable style={(state) => [postStyles.commentsBtn, state.pressed && postStyles.btnPressed]} onPress={handleComments}>
          <Text style={postStyles.commentsText}>Comentários</Text>
        </Pressable>
      </View>
    </View>
  );
}