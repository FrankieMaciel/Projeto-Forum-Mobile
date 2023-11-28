import { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { X } from 'react-native-feather';
import { CardStyle } from "../styles/card";

interface Props {
    closeFunc: () => void;
  }

export function CriarPostagem(props: Props){

    const [inputTitulo, setInputTitulo] = useState('');
    const [inputTexto, setInputTexto] = useState('');

    const { closeFunc } = props;

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
                    ></TextInput>

                    <TextInput 
                        style={CardStyle.inputTexto}
                        multiline={true}
                        numberOfLines={20}
                    ></TextInput>

                    <TouchableOpacity style={CardStyle.botaoCriar}>
                        <Text style={CardStyle.botaoText}>Criar Postagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}