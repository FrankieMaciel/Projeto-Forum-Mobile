import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import vars from '../styles/root';
import { Search, Menu, LogOut } from 'react-native-feather';
import { useNavigation } from "@react-navigation/native";
import { headerStyles } from '../styles/header';
import { host } from '../utils/forumApi';
import { Image } from 'expo-image';

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

interface Props {
    pfpIcon: string;
}

export function PageTitulo(props: Props) {
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
            <Image
            source={props.pfpIcon}
            contentFit="fill"
            style={
                {
                "width": 40,
                "height": 40,
                borderRadius: 5,
                "backgroundColor": "red",
                }
            }
            />
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
