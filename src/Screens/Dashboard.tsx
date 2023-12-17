import { useCallback, useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, RefreshControl } from "react-native";
import { PageTitulo } from "../components/Titulo";
import { CriarPostagem } from "../components/CardPostagem";
import { PostCard } from "../components/Post";
import { homeStyles } from "../styles/home";
import { pageStyles } from "../styles/pageInitial";
import axios from 'axios';
import { getForumApi, host } from "../utils/forumApi";
import { PostCardProps, User } from "../@types/objects";
import * as UserData from "../utils/userData";
import { Loader } from "react-native-feather";
import { UserContext } from "../contexts/user";

export function Dashboard() {
    const { user } = useContext(UserContext);

    const [refreshing, setRefreshing] = useState(false);
    const [criarPostagemActive, setCriarPostagemActive] = useState(false);
    const [posts, setPosts] = useState<PostCardProps[]>([]);
    const [profileURL, setProfileURL] = useState<string | null>(null);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getPosts();
        setRefreshing(false);
    }, []);

    const showCriarPostagem = async () => {
        setCriarPostagemActive(!criarPostagemActive);
        if (criarPostagemActive) onRefresh();
    };

    const getPosts = async () => {
        const forumApi = await getForumApi();
        await forumApi.get('/posts')
            .then((response): void => {
                const data = response.data;
                if (!data) return;
                console.log(data);
                const dataTreated: PostCardProps[] = [];
                for (let post of data) dataTreated.push({
                    id: post._id,
                    user: {
                        userID: post.user.userID,
                        name: post.user.name,
                        profileURL: post.user.profileURL
                    },
                    title: post.title,
                    content: post.content,
                    date: new Date(post.date)
                });
                if (dataTreated === posts) return;

                let Revdata = dataTreated.reverse();
                setPosts(Revdata);
            })
            .catch(error => console.error(error));
    };

    function getCriarPostagemActive(): boolean {
        return criarPostagemActive;
    }

    async function getProfilePic() {
        const imageUrl = `http://${host}:3000/public/custom-pfp/${user.id}.jpg`;
        fetch(imageUrl, {
            method: 'HEAD'
        })
        .then(response => {
            if (response.ok) {
            console.log('A imagem existe!');
            setProfileURL(imageUrl);
            } else {
            console.log('A imagem não foi encontrada.');
            setProfileURL(`http://${host}:3000/public/custom-pfp${user.profileURL}`);
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro ao verificar a existência da imagem:', error);
        });
    }

    useEffect(() => {
        getPosts();
        getProfilePic();
    }, []);

    return (
        <View style={homeStyles.screen}>
            <PageTitulo pfpIcon={profileURL ? profileURL : `http://${host}:3000/public/custom-pfp${user.profileURL}`}></PageTitulo>
            {criarPostagemActive ? <CriarPostagem closeFunc={showCriarPostagem} closeUseState={getCriarPostagemActive} /> : null}
            <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: '100%' }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View style={homeStyles.containerView}>

                    <View>
                        <TouchableOpacity style={pageStyles.button} onPress={showCriarPostagem}
                            disabled={criarPostagemActive}>
                            <Text style={pageStyles.text}>Criar Postagem</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyles.postListView}>
                        {posts.length > 0 ? (
                            posts.map(post => (
                                <PostCard
                                    key={post.id}
                                    id={post.id}
                                    user={post.user}
                                    title={post.title}
                                    content={post.content}
                                    date={new Date(post.date)}
                                ></PostCard>
                            ))
                        ) : (
                            <View>
                                <Loader
                                    stroke={"#fff"}
                                    fill={"#00000000"}
                                    width={25}
                                    height={25}
                                ></Loader>
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );

}