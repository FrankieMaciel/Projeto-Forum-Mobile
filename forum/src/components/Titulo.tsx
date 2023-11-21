import { StyleSheet, View, Text } from 'react-native';
import vars from '../styles/root';
import { Search, Menu } from 'react-native-feather';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: vars.bg2,
        justifyContent: 'space-between',
        width: '100%',
        height: 70,
        paddingTop: 30
    },
    text: {
        color: vars.mainText,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 10
    },
    circleIcon: {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginHorizontal: 10
      }
})

export const Titulo = () => (
    <View style={styles.header}>
        <Text style={styles.text}>Fórum</Text>
    </View>
)

export const HomeTitulo = () => (
    <View style={styles.header}>
        <Menu
            stroke={vars.mainText} 
            fill="#00000000" 
            width={20} 
            height={20}
            style={styles.icon}
        />
        <Text style={styles.text}>Fórum</Text>
        <Search
            stroke={vars.mainText} 
            fill="#00000000"
            width={20} 
            height={20}
            style={styles.icon}
        />
    </View>
)
export const PageTitulo = () => (
    <View style={styles.header}>
      <View style={styles.circleIcon} />
      <Text style={styles.text}>Fórum</Text>
      <Search
        stroke={vars.mainText}
        fill="#00000000"
        width={20}
        height={20}
        style={styles.icon}
      />
    </View>
  );
  