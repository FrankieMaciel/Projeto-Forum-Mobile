import { Dispatch, SetStateAction, useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { X } from 'react-native-feather';
import { CardStyle } from "../styles/card";
import { getForumApi } from "../utils/forumApi";
import vars from "../styles/root";
import { UserContext } from "../contexts/user";
import { PostContext } from "../contexts/post";

interface Props {
  closeFunc: () => void;
  closeUseState: () => boolean;
}

export function CriarComentario(props: Props) {
  const { user } = useContext(UserContext);
  const { post } = useContext(PostContext);

  const [inputTexto, setInputTexto] = useState('');
  const maxInputTexto = 500;

  const { closeFunc } = props;
  let { closeUseState } = props;

  const handleCreatePost = async () => {
    const dataToSend = {
      user: {
        id: user.id,
        name: user.username,
        profileURL: user.profileURL || ''
      },
      postId: post.id,
      content: inputTexto,
    };

    const fetchData = async () => {
      const forumApi = await getForumApi();
      await forumApi.post(`/comments`, dataToSend)
        .then(async response => {
          const data = response.data;
          if (!data) {
            let erroMessage = JSON.parse(data.error);
          };
        }).catch(error => console.error(error));
    };
    fetchData();
    closeFunc();
  };

  return (
    <View style={CardStyle.screenView}>
      <View style={CardStyle.containerView}>
        <TouchableOpacity
          style={CardStyle.fechar}
          onPress={closeFunc}
          disabled={!closeUseState()}
        >
          <X
            stroke={'#fff'}
            fill={'#00000000'}
          />
        </TouchableOpacity>
        <View style={CardStyle.inputView}>
          <TextInput
            style={CardStyle.inputTexto}
            multiline={true}
            numberOfLines={20}
            maxLength={maxInputTexto}
            onChangeText={setInputTexto}
            placeholder="Escreva algo..."
            placeholderTextColor={vars.textLight}
          ></TextInput>
          <Text style={CardStyle.textCount}>{inputTexto.length}/{maxInputTexto}</Text>

          <TouchableOpacity style={CardStyle.botaoCriar} onPress={handleCreatePost}>
            <Text style={CardStyle.botaoText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}