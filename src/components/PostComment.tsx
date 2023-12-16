import { View, Text, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import { useNavigation } from "@react-navigation/native";
import formatDate from "../utils/dateFormat";
import { PostCardProps } from "../@types/objects";

export function PostCardComment({ user, title, content, date }: PostCardProps) {

  const formattedDate = formatDate(date);

  return (

    <View style={[postStyles.containerView, postStyles.commentsPost]}>
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
    </View>
  );
}