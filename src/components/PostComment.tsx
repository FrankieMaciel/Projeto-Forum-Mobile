import { View, Text, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import { useNavigation } from "@react-navigation/native";

export interface User {
  id: string;
  name: string;
  profileURL: string;
}

export interface CardProps {
  user: User;
  title: string;
  content: string;
  date: Date
}

export function PostCardComment({ user, title, content, date }: CardProps) {

  let day: number | string = date.getDate(),
    mon: number | string = date.getMonth() + 1;
  const yer = date.getFullYear(),
    hrs = date.getHours(),
    min = date.getMinutes();

  if (day < 10) day = '0' + day;
  if (mon < 10) mon = '0' + mon;

  return (
    <View style={postStyles.commentScreen}>
      <View style={postStyles.containerView}>
        <View style={postStyles.postHeader}>
          <View style={postStyles.icon}></View>
          <View>
            <Text style={postStyles.headerTitle}>{user.name}</Text>
            <Text style={postStyles.date}>{day}/{mon}/{yer} às {hrs}:{min}</Text>
          </View>
        </View>
        <View style={postStyles.textBG}>
          <Text style={postStyles.postTitle}>{title}</Text>
          <Text style={postStyles.postContent}>{content}</Text>
        </View>
        {/* <View>
        <TouchableOpacity style={postStyles.commentsBtn} onPress={handleComments}>
          <Text style={postStyles.commentsText}>Comentários</Text>
        </TouchableOpacity>
      </View> */}
      </View>
    </View>
  )
}