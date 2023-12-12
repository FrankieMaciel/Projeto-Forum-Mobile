import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import vars from '../styles/root';
import { Search, Menu, LogOut } from 'react-native-feather';
import { useNavigation } from "@react-navigation/native";
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
                <Text style={headerStyles.text}>TechForum</Text>
            </Pressable>
        </View>
    )
}

interface PerfilProps {
    logout: () => void
}

export function PerfilTitulo({ logout }: PerfilProps) {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('Dashboard');
    }

    return (
        <View style={headerStyles.header}>
            <Pressable
                style={headerStyles.forumPress}
                onPress={handlePress}
            >
                <Text style={headerStyles.profileTitle}>TechForum</Text>
            </Pressable>
            <TouchableOpacity style={headerStyles.logout} onPress={logout}>
                <LogOut
                    stroke={"#fff"}
                    fill={"#00000000"}
                    width={25}
                    height={25}
                ></LogOut>
            </TouchableOpacity>
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

    function GoSearch() {
        navigation.navigate('Search');
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
                <Text style={headerStyles.text}>TechForum</Text>
            </Pressable>
            <TouchableOpacity onPress={GoSearch} style={headerStyles.searchButton} >
                <Search
                    stroke={vars.mainText}
                    fill="#00000000"
                    width={25}
                    height={25}
                    style={headerStyles.icon}
                />
            </TouchableOpacity>
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
                <Text style={headerStyles.text}>TechForum</Text>
            </Pressable>
        </View>
    )
}

export function LoginTitulo() {
    return (
        <View style={headerStyles.HeaderEmpty}>
            <Text style={headerStyles.text}>TechForum</Text>
        </View>
    )
}
