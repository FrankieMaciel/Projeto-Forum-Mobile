import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import formatDate from "../utils/dateFormat";
import { CommentCardProps } from "../@types/objects";
import { UserContext } from "../contexts/user";
import { Edit, Trash2 } from "react-native-feather";
import vars from "../styles/root";
import { host } from "../utils/forumApi";
import { Image } from 'expo-image';

interface ViewPostCardProps extends CommentCardProps {
  selectedComment: (postInfo: any) => void;
  openEditComment: () => void;
  openDeleteComment: () => void;
}

export function CommentCard({ user, content, date, selectedComment, postId, openEditComment, openDeleteComment }: ViewPostCardProps) {
  const currentUser = useContext(UserContext);
  const formattedDate = formatDate(date);

  const [profileURL, setProfileURL] = useState<string | null>(null);

  function handleEdit() {
    let obj = {
      id: postId,
      content: content,
    }
  
    selectedComment(obj);
    openEditComment();
  }

  function handleDelete() {
    let obj = {
      id: postId,
      content: content,
    }
  
    selectedComment(obj);
    openDeleteComment();
  }

  async function getProfilePic() {

    console.log(user);

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
        {user.userID === currentUser.user.id
          ? <View style={postStyles.postActions}>
            <TouchableOpacity onPress={handleEdit} style={postStyles.actionsBtn}>
              <Edit
                stroke='#fff'
                fill='#0000'
              ></Edit>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={postStyles.actionsBtn}>
              <Trash2
                stroke={vars.danger}
                fill='#0000'
              ></Trash2>
            </TouchableOpacity>
          </View> : null}
      </View>
      <View style={postStyles.textBG}>
        <Text style={postStyles.postContent}>{content}</Text>
      </View>
    </View >
  );
}