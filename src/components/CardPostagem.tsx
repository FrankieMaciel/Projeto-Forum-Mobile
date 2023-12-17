import { Dispatch, SetStateAction, useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { X } from 'react-native-feather';
import { CardStyle } from "../styles/card";
import * as Token from "../utils/token";
import * as UserData from "../utils/userData";
import { getForumApi } from "../utils/forumApi";
import vars from "../styles/root";
import { UserContext } from "../contexts/user";

interface Props {
    closeFunc: () => void;
    closeUseState: () => boolean;
}

export function CriarPostagem(props: Props) {
    const { user } = useContext(UserContext);

    const [inputTitulo, setInputTitulo] = useState('');
    const [inputTexto, setInputTexto] = useState('');
    const maxInputTexto = 500;

    const { closeFunc } = props;
    let { closeUseState } = props;

    const handleCreatePost = async () => {
        console.log(user);
        const dataToSend = {
            user: {
                userID: user.id,
                name: user.username,
                profileURL: user.profileURL
            },
            title: inputTitulo,
            content: inputTexto,
        };

        const fetchData = async () => {
            const forumApi = await getForumApi();
            await forumApi.post(`/posts`, dataToSend)
                .then(async response => {
                    const data = response.data;
                    console.log('Dados recebidos: ', data);
                    if (!data) {
                        let erroMessage = JSON.parse(data.error);
                        console.log(erroMessage[0]);
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
                    <TextInput style={CardStyle.inputTitulo}
                        placeholder="Título"
                        maxLength={50}
                        onChangeText={setInputTitulo}
                        placeholderTextColor={vars.textLight}
                    ></TextInput>

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
                        <Text style={CardStyle.botaoText}>Criar Postagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}