import { StyleSheet } from "react-native";
import vars from "./root";

export const CardStyle = StyleSheet.create({
    screenView: {
        backgroundColor: '#0008',
        position: 'absolute',
        display: 'flex',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        zIndex: 10
    },
    containerView: {
        display: 'flex',
        backgroundColor: vars.bg,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
        width: '90%',
        marginHorizontal: 22.5,
        top: '30%',
    },
    inputView: {
        width: '100%',
    },
    input: {
        color: vars.mainText,
        borderBottomColor: vars.mainText,
        borderBottomWidth: vars.mainBorderWidth,
        paddingHorizontal: 15,
        fontSize: 20,
        marginBottom: 10,
        height: 40,
    },
    inputTitulo: {
        color: vars.mainText,
        borderBottomColor: vars.mainText,
        borderBottomWidth: vars.mainBorderWidth,
        paddingHorizontal: 15,
        fontSize: 20,
        marginBottom: 10,
        height: 40,
    },
    inputTexto: {
        color: vars.mainText,
        textAlignVertical: 'top',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        height: 130
    },
    cardText: {
        color: vars.mainText,
        fontSize: 20
    },
    textCount: {
        color: vars.textLight,
        textAlign: 'right',
        paddingHorizontal: 10,
        marginVertical: 5
    },
    botaoText: {
        color: vars.innerText,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    botaoCriar: {
        backgroundColor: vars.mainButton,
        borderRadius: 30,
        padding: 10,
        marginHorizontal: '25%'
    },
    editProfileActions: {
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: "center",
        gap: 40
    },
    editProfileActionBtn: {
        marginHorizontal: 0,
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
    },
    botaoEditarPerfil: {
        paddingHorizontal: '7.5%'
    },
    botaoDeletar: {
        backgroundColor: vars.danger,
        marginTop: '10%',
        borderRadius: 30,
        padding: 10,
    },
    deletarText: {
        color: vars.mainText
    },
    fechar: {
        backgroundColor: vars.bg,
        borderRadius: 5,
        left: 130,
        marginBottom: 20,
    }
});