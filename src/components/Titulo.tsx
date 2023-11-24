import { View, Text, Pressable } from 'react-native';
import vars from '../styles/root';
import { Search, Menu } from 'react-native-feather';
import { useNavigation } from "@react-navigation/native";
import { func } from 'prop-types';
import { headerStyles } from '../styles/header';

export function Titulo() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Dashboard');
    }
    return (
        <View style={headerStyles.HeaderEmpty}>
            <Pressable
                style={headerStyles.forumPress}
                onPress={handlePress}
            >
                <Text style={headerStyles.text}>Fórum</Text>
            </Pressable>
        </View>
    )
}

export function HomeTitulo() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Dashboard');
    }

    return (
        <View style={headerStyles.header}>
            <Menu
                stroke={vars.mainText}
                fill="#00000000"
                width={20}
                height={20}
                style={headerStyles.icon}
            />
            <Pressable
                style={headerStyles.forumPress}
                onPress={handlePress}
            >
                <Text style={headerStyles.text}>Fórum</Text>
            </Pressable>
            <Search
                stroke={vars.mainText}
                fill="#00000000"
                width={20}
                height={20}
                style={headerStyles.icon}
            />
        </View>
    )
};
export function PageTitulo() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Dashboard');
    }

    function Profile() {
        navigation.navigate('Profile');
    }

    return (
        <View style={headerStyles.header}>
            <Pressable style={headerStyles.btnProfile} onPress={Profile}>
                <View style={headerStyles.circleIcon} />
            </Pressable>
            <Pressable
                style={headerStyles.forumPress}
                onPress={handlePress}
            >
                <Text style={headerStyles.text}>Fórum</Text>
            </Pressable>
            <Search
                stroke={vars.mainText}
                fill="#00000000"
                width={20}
                height={20}
                style={headerStyles.icon}
            />
        </View>
    )
};

export function SearchTitle() {

    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Dashboard');
    }

    return (
        <View style={headerStyles.DarkHeader}>
            <Pressable
                style={headerStyles.forumPress}
                onPress={handlePress}
            >
                <Text style={headerStyles.text}>Fórum</Text>
            </Pressable>
        </View>
    )
}
