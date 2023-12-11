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
        textAlignVertical: 'top',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        height: 130
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
        backgroundColor: vars.bgWhite,
        borderRadius: 30,
        padding: 10,
        marginHorizontal: '25%'
    },
    fechar: {
        backgroundColor: vars.bg,
        borderRadius: 5,
        left: 130,
        marginBottom: 20,
    }
})