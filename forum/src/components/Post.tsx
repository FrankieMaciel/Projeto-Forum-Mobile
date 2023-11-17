import { View, Text } from "react-native";
import { postStyles } from "../styles/post";

export function PostCard() {

  return(
    <View style={postStyles.containerView}>
      <View style={postStyles.postHeader}>
        <View style={postStyles.icon}></View>
        <View>
          <Text style={postStyles.headerTitle}>Fulano de num sei o quem</Text>
          <Text style={postStyles.date}>dd/mm/aaaa às hr/mn</Text>
        </View>
      </View>
      <View style={postStyles.textBG}>
        <Text style={postStyles.postTitle}>Texto de Exemplo AAaaaaaaaaa</Text>
        <Text>Aaaaaaaaaaaaaaaaaaaaaaaaa Lorem Ipsum dolor sit amet consectur adipiscing elit.</Text>
      </View>
      <View style={postStyles.comments}>
        <Text>Comentários</Text>
      </View>
    </View>
  )
}