import { View, Text, Pressable } from "react-native";
import { postStyles } from "../styles/post";
import { useNavigation } from "@react-navigation/native";
import formatDate from "../utils/dateFormat";
import { useContext } from "react";
import { PostContext } from "../contexts/post";
import { PostCardProps } from "../@types/objects";

export function PostCard({ id, user, title, content, date }: PostCardProps) {
  const { post, setPost } = useContext(PostContext);

  const navigation = useNavigation();

  const formattedDate = formatDate(date);

  function handleComments(): void {
    setPost({ id, user, title, content, date });
    navigation.navigate('Comments');
  }

  return (
    <View style={postStyles.containerView}>
      <View style={postStyles.postHeader}>
        <View style={postStyles.icon}></View>
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