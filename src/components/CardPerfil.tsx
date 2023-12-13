import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { X } from 'react-native-feather';
import { CardStyle } from "../styles/card";
import * as Token from "../utils/token";
import * as UserData from "../utils/userData";
import { getForumApi } from "../utils/forumApi";
import { User } from "../@types/objects";
import * as ImagePicker from 'expo-image-picker';

interface Location {
    lat: string;
    lng: string;
}

interface Props {
    user: User | undefined;
    closeFunc: () => void;
    closeUseState: () => boolean;
    changeUser: () => void;
}

export function EditarPerfil(props: Props) {

    async function uploadImageProfile(imageURI: string) {
        if (!props.user) return;
        const formData = new FormData();
        formData.append('pf-picture',
        {
        type:'image/jpg',
        name:`${props.user.id}.jpg`,
        uri:imageURI,
        } as any);
        const forumApi = await getForumApi();
        await forumApi.post('/users/profilePicture/' + props.user.id, formData,
        {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
        })
        .then(() => {
            props.changeUser();
            console.log('Mudando...');
        })
        .catch(error => console.error(error));
    }

    const handleChoosePhoto = async () => {

        let {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status != 'granted') {
            alert("Precisamos de permissão para acessar as imagens!");
            return;
        }

        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });
        if (!_image.canceled) { 
            await uploadImageProfile(_image.assets[0].uri);
        }
    };

    const { 
    closeFunc,
    user,
    closeUseState
    } = props;

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

                <TouchableOpacity style={CardStyle.botaoCriar} onPress={handleChoosePhoto}>
                        <Text style={CardStyle.botaoText}>Mudar foto</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={CardStyle.botaoCriar}>
                        <Text style={CardStyle.botaoText}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}