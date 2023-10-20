import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})

export const Titulo = () => {
    return (
        <>
            <Text style={styles.text}>
                Fórum
            </Text >
        </>
    );

}