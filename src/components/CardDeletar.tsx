import { TouchableOpacity, View, Text } from "react-native";
import { CardStyle } from "../styles/card";
import { X } from "react-native-feather";
import { ActionModalProps } from "../@types/objects";
import { getForumApi } from "../utils/forumApi";

interface DeleteProps extends ActionModalProps {
  type: "post" | "comment" | "user";
  logout: () => void;
}

export const CardDeletar = (props: DeleteProps) => {
  const { type, objectId, closeFunc } = props;
  let { closeUseState, logout } = props;

  let deleteText;
  switch (type) {
    case 'post': deleteText = 'essa postagem'; break;
    case 'comment': deleteText = 'esse comentário'; break;
    case 'user': deleteText = 'seu perfil';
  }

  async function handleDelete() {
    const forumApi = await getForumApi();

        let ntype = 'posts';
        if (type === 'comment') ntype = 'comments';
        if (type === 'user') ntype = 'users';

        await forumApi.get(`/${ntype}/delete/${objectId}`)
        .then((response): void => {
          console.log(response);
        }).catch(error => console.error(error));
        closeFunc();

        if (type === 'user') {
          logout();
        }
  }

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
        <Text style={CardStyle.cardText}>Deseja mesmo deletar {deleteText}?</Text>
          <TouchableOpacity
            onPress={handleDelete}
            style={CardStyle.botaoDeletar}
          >
            <Text style={CardStyle.deletarText}>Sim, deletar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};