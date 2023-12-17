import { TouchableOpacity, View, Text } from "react-native";
import { CardStyle } from "../styles/card";
import { X } from "react-native-feather";
import { ActionModalProps } from "../@types/objects";

interface DeleteProps extends ActionModalProps {
  type: "post" | "comment" | "user";
}

export const CardDeletar = (props: DeleteProps) => {
  const { type, objectId, closeFunc } = props;
  let { closeUseState } = props;

  let deleteText;
  switch (type) {
    case 'post': deleteText = 'essa postagem'; break;
    case 'comment': deleteText = 'esse comentário'; break;
    case 'user': deleteText = 'seu perfil';
  }

  function handleDelete() {

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
        <View>
          <TouchableOpacity
            style={[CardStyle.botaoCriar, CardStyle.botaoDeletar]}
          >
            <Text style={CardStyle.deletarText} onPress={handleDelete}>Sim, deletar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};