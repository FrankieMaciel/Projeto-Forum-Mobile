import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import formatDate from "../utils/dateFormat";
import { CommentCardProps } from "../@types/objects";
import { UserContext } from "../contexts/user";
import { Edit, Trash2 } from "react-native-feather";
import vars from "../styles/root";

export function CommentCard({ user, content, date }: CommentCardProps) {
  const currentUser = useContext(UserContext);
  const formattedDate = formatDate(date);

  return (
    <View style={postStyles.containerView}>
      <View style={postStyles.postHeader}>
        <View style={postStyles.icon}></View>
        <View>
          <Text style={postStyles.headerTitle}>{user.name}</Text>
          <Text style={postStyles.date}>{formattedDate}</Text>
        </View>
        {user.userID === currentUser.user.id
          ? <View style={postStyles.postActions}>
            <TouchableOpacity style={postStyles.actionsBtn}>
              <Edit
                stroke='#fff'
                fill='#0000'
              ></Edit>
            </TouchableOpacity>
            <TouchableOpacity style={postStyles.actionsBtn}>
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