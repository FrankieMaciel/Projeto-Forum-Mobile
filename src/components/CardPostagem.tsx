import axios from "axios";
import host from "../Screens/host";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { X } from 'react-native-feather';
import { CardStyle } from "../styles/card";
import * as Token from "../utils/token";
import * as UserData from "../utils/userData";
import { getForumApi } from "../utils/forumApi";

interface Props {
    closeFunc: () => void;
}

export function CriarPostagem(props: Props) {

    const [inputTitulo, setInputTitulo] = useState('');
    const [inputTexto, setInputTexto] = useState('');

    const { closeFunc } = props;

    const handleCreatePost = async () => {
        const user = await UserData._retrieveData();
        console.log(user);
        const dataToSend = {
            user: {
                id: user.id,
                name: user.username,
                profileURL: user.profileURL
            },
            title: inputTitulo,
            content: inputTexto,
        }

        const fetchData = async () => {
            const forumApi = await getForumApi();
            await forumApi.post(`/posts`, dataToSend)
                .then(async response => {
                    const data = response.data;
                    console.log('Dados recebidos: ', data);
                    if (!data) {
                        let erroMessage = JSON.parse(data.error);
                        console.log();
                        console.log(erroMessage[0]);
                    };
                }).catch(error => console.error(error));
        }
        fetchData();
        closeFunc();
    }

    return (
        <View style={CardStyle.screenView}>
            <View style={CardStyle.containerView}>
                <TouchableOpacity onPress={closeFunc}>
                    <X
                        style={CardStyle.fechar}
                        stroke={'#fff'}
                        fill={'#00000000'}
                    />
                </TouchableOpacity>
                <View style={CardStyle.inputView}>
                    <TextInput style={CardStyle.inputTitulo}
                        placeholder="Título"
                        onChangeText={setInputTitulo}
                    ></TextInput>

                    <TextInput
                        style={CardStyle.inputTexto}
                        multiline={true}
                        numberOfLines={20}
                        onChangeText={setInputTexto}
                    ></TextInput>

                    <TouchableOpacity style={CardStyle.botaoCriar} onPress={handleCreatePost}>
                        <Text style={CardStyle.botaoText}>Criar Postagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}