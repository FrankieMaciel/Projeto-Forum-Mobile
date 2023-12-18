import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import { useNavigation } from "@react-navigation/native";
import formatDate from "../utils/dateFormat";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../contexts/post";
import { PostCardProps } from "../@types/objects";
import { Image } from 'expo-image';
import { host } from "../utils/forumApi";
import { Edit, Trash2 } from "react-native-feather";
import vars from "../styles/root";
import { UserContext } from "../contexts/user";
import { CardEditar } from "./CardEditar";
import { CardDeletar } from "./CardDeletar";

interface ViewPostCardProps extends PostCardProps {
  screen: 'dashboard' | 'search';
  openEditFunc?: () => void;
  openDeleteFunc?: () => void;
  selectPost: (postInfo: any) => void;
}

export function PostCard(
  { id, user, title, content, date, screen, selectPost, openEditFunc, openDeleteFunc}
  : ViewPostCardProps) {
  const { post, setPost } = useContext(PostContext);
  const currentUser = useContext(UserContext);
  const [profileURL, setProfileURL] = useState<string | null>(null);

  const navigation = useNavigation();

  const formattedDate = formatDate(date);

  function handleComments(): void {
    setPost({ id, user, title, content, date });
    navigation.navigate('Comments');
  }

  function hadleEdit() {

    let obj = {
      id: id,
      title: title,
      content: content
    }

    selectPost(obj);
    if (openEditFunc) openEditFunc(); 
  }

  function hadleDelete() {

    let obj = {
      id: id,
      title: title,
      content: content
    }

    selectPost(obj);
    if (openDeleteFunc) openDeleteFunc(); 
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
    <>
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
          {(screen === 'search' && user.userID === currentUser.user.id)
            ? <View style={postStyles.postActions}>
              <TouchableOpacity
                style={postStyles.actionsBtn}
                onPress={hadleEdit}
              >
                <Edit
                  stroke={"#fff"}
                  fill={"#00000000"}
                ></Edit>
              </TouchableOpacity>
              <TouchableOpacity
                style={postStyles.actionsBtn}
                onPress={hadleDelete}
              >
                <Trash2
                  stroke={vars.danger}
                  fill={"#00000000"}
                ></Trash2>
              </TouchableOpacity>
            </View> : null}
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
    </>
  );
}