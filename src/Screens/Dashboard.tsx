import { View, Text, TouchableOpacity } from "react-native";
import { homeStyles } from "../styles/home";
import { PageTitulo } from "../components/Titulo";
import { pageStyles } from "../styles/pageInitial";
import { CriarPostagem } from "../components/CardPostagem";
import { useState } from "react";


export function Dashboard() {

    const [criarPostagemActive, setCriarPostagemActive] = useState(false);

    function showCriarPostagem(): void {
        setCriarPostagemActive(!criarPostagemActive);
    }

    return (
        <View style={homeStyles.containerView}>
            <PageTitulo></PageTitulo>
            {criarPostagemActive ? <CriarPostagem closeFunc={showCriarPostagem}/> : null}
            <View>
                <TouchableOpacity style={pageStyles.cardComponent} onPress={showCriarPostagem}>
                <Text style={pageStyles.button}>Criar Postagem</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}