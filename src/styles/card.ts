import { StyleSheet } from "react-native"
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
        backgroundColor: vars.bg2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
        width: '90%',
        marginHorizontal: 22.5,
        top: '30%',
    },
    inputView: {
        width: '90%',
    },
    inputTitulo: {
        backgroundColor: vars.bgWhite,
        color: vars.innerText,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 20,
        marginBottom: 10,
        height: 40,
    },
    inputTexto: {
        backgroundColor: vars.bgWhite,
        color: vars.innerText,
        borderRadius: 10,
        paddingVertical: 5,
        fontSize: 20,
        height: 130
    },
    botaoText: {
        color: vars.innerText,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    botaoCriar: {
        backgroundColor: vars.bgWhite,
        borderRadius: 30,
        padding: 10,
        marginTop: 20,
        marginHorizontal: '25%'
    },
    fechar: {
        left: 150,
        marginBottom: 30,
    }
})