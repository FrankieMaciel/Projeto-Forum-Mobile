import { StyleSheet, View, Text, Pressable } from 'react-native';
import vars from '../styles/root';
import { Search, Menu } from 'react-native-feather';
import { useNavigation } from "@react-navigation/native";
import { func } from 'prop-types';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: vars.bg2,
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        paddingTop: 30
    },
    DarkHeader: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: vars.bg,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        height: 80,
        paddingTop: 30
    },
    HeaderEmpty: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: vars.bg2,
        justifyContent: 'center',
        width: '100%',
        height: 100,
        paddingTop: 30
    },
    text: {
        position: 'absolute',
        color: vars.mainText,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        width: '100%',
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 10,
        zIndex: 5,
    },
    circleIcon: {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginHorizontal: 10,
        zIndex: 5
    },
    forumPress: {
        width: 120,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        top: 10,
    }
})

export function Titulo() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Homepage');
    }
    return (
    <View style={styles.HeaderEmpty}>
        <Pressable
                style={styles.forumPress}
                onPress={handlePress}
            >
                <Text style={styles.text}>Fórum</Text>
        </Pressable>
    </View>
    )
}

export function HomeTitulo() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Homepage');
    }

    return (
        <View style={styles.header}>
        <Menu
            stroke={vars.mainText}
            fill="#00000000"
            width={20}
            height={20}
            style={styles.icon}
            />
        <Pressable
                style={styles.forumPress}
                onPress={handlePress}
            >
                <Text style={styles.text}>Fórum</Text>
        </Pressable>
        <Search
            stroke={vars.mainText}
            fill="#00000000"
            width={20}
            height={20}
            style={styles.icon}
        />
    </View>
    )
};
export function PageTitulo() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Homepage');
    }

    return (
        <View style={styles.header}>
        <View style={styles.circleIcon} />
        <Pressable
                style={styles.forumPress}
                onPress={handlePress}
            >
                <Text style={styles.text}>Fórum</Text>
        </Pressable>
        <Search
            stroke={vars.mainText}
            fill="#00000000"
            width={20}
            height={20}
            style={styles.icon}
            />
    </View>
    )
};

export function SearchTitle() {

    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Homepage');
    }

    return (
        <View style={styles.DarkHeader}>
            <Pressable
                style={styles.forumPress}
                onPress={handlePress}
            >
                <Text style={styles.text}>Fórum</Text>
            </Pressable>
        </View>
    )
}
