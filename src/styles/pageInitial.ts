import { StyleSheet } from "react-native";
import vars from "./root";

export const pageStyles = StyleSheet.create({
    button: {
        backgroundColor: vars.mainButton,
        borderRadius: 10,
        width: 150,
        padding: 10,
        marginTop: 30,
        marginBottom: 10,
        position: 'absolute',
        right: 10,
    },
    text: {
        textAlign: 'center',
    }
})