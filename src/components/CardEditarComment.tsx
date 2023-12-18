import { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { X } from 'react-native-feather';
import { CardStyle } from "../styles/card";
import { getForumApi } from "../utils/forumApi";
import vars from "../styles/root";
import { UserContext } from "../contexts/user";
import { ActionModalProps } from "../@types/objects";

interface EditProps extends ActionModalProps {
  type: "post" | "comment";
  contentText: string;
}

export function CardEditarComment(props: EditProps) {
  const { user } = useContext(UserContext);

  const [inputTexto, setInputTexto] = useState('');
  const maxInputTexto = 500;

  const { type, objectId, closeFunc } = props;
  let { closeUseState, contentText } = props;

  const handleEdit = async () => {
    console.log(objectId);
    const dataToSend = {
      user: {
        userID: user.id,
        name: user.username,
        profileURL: user.profileURL
      },
      content: inputTexto,
    };
    

    const fetchData = async () => {
      const forumApi = await getForumApi();
      await forumApi.post(`/comments/edit/${objectId}`, dataToSend)
        .then(async response => {
          const data = response.data;
          console.log(data);
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
          >{contentText}</TextInput>
          <Text style={CardStyle.textCount}>{inputTexto.length}/{maxInputTexto}</Text>

          <TouchableOpacity style={CardStyle.botaoCriar} onPress={handleEdit}>
            <Text style={CardStyle.botaoText}>Editar comentário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}