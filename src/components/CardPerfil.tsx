import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { X } from 'react-native-feather';
import { CardStyle } from "../styles/card";
import * as Token from "../utils/token";
import * as UserData from "../utils/userData";
import { getForumApi } from "../utils/forumApi";

interface Location {
    lat: string;
    lng: string;
}

interface User {
    name: string,
    profileURL: string;
    location?: Location
}

interface Props {
    user: User;
    closeFunc: () => void;
    closeUseState: () => boolean;
}

export function EditarPerfil(props: Props) {

    const [username, setUsername] = useState('');
    const [pfPicture, setPfPicture] = useState('');
    const [location, setLocation] = useState<Location>()
    const maxInputTexto = 500;

    const { closeFunc, user } = props;
    let { closeUseState } = props

    const handleCreatePost = async () => {
        const user = await UserData._retrieveData();
        console.log(user);
        const dataToSend = {
            username,
            profileURL: pfPicture,
            location
        }
        console.log(dataToSend);

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
                        // style={CardStyle.input}
                        placeholder="Título"
                        maxLength={50}
                        onChangeText={setUsername}
                    ></TextInput>

                    <TextInput
                        // style={CardStyle.input}
                        onChangeText={setPfPicture}
                    ></TextInput>

                    <TouchableOpacity style={CardStyle.botaoCriar} onPress={handleCreatePost}>
                        <Text style={CardStyle.botaoText}>Criar Postagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}