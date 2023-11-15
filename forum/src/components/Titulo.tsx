import { StyleSheet, View, Text } from 'react-native';
import vars from '../styles/root';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        backgroundColor: vars.bg2,
        justifyContent: 'center',
        width: '100%',
        height: 70
    },
    text: {
        color: vars.mainText,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30
    }
})

export const Titulo = () => (
    <View style={styles.header}>
        <Text style={styles.text}>Fórum</Text>
    </View>
)