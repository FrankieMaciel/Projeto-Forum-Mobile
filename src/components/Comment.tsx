import { View, Text, Pressable } from "react-native";
import { postStyles } from "../styles/post";
import formatDate from "../utils/dateFormat";
import { CommentCardProps } from "../@types/objects";

export function CommentCard({ user, content, date }: CommentCardProps) {
  const formattedDate = formatDate(date);

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
        <Text style={postStyles.postContent}>{content}</Text>
      </View>
    </View>
  );
}