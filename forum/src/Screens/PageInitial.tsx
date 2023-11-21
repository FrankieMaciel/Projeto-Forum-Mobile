import { View, Text } from "react-native";
import { homeStyles } from "../styles/home";
import {PageTitulo } from "../components/Titulo";
import { pageStyles } from "../styles/pageInitial";


export function PageInitial(){

    return(
       <View style={homeStyles.containerView}>
         <PageTitulo></PageTitulo>
         <View>
            <Text style={pageStyles.button}>Criar Postagem</Text>
         </View>
        </View>
    );

}