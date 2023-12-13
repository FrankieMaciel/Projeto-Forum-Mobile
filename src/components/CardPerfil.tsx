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
    changeUser: (image: any) => void;
}

export function EditarPerfil(props: Props) {

    const [profileImage, setprofileImage] = useState<String>();

    async function uploadImageProfile() {
        console.log(props.user);
        if (!profileImage) return;
        if (!props.user) return;
        const formData = new FormData();
        formData.append('pf-picture',
        {
        type:'image/jpg',
        name:`${props.user.id}.jpg`,
        uri:profileImage,
        } as any);
    
        const forumApi = await getForumApi();
        await forumApi.post('/users/profilePicture/' + props.user.id, formData,
        {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
        })
        .then((response): void => {
            console.log(response);
            props.changeUser(response.data.image);
        })
        .catch(error => console.error(error));
    }

    const handleChoosePhoto = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        });
        console.log(_image);
        if (!_image.canceled) {
            setprofileImage(_image.assets[0].uri);
        }

        uploadImageProfile();
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