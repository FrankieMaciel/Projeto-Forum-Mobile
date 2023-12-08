import axios from "axios";
import host from "./host";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, RefreshControl } from "react-native";
import { PageTitulo } from "../components/Titulo";
import { CriarPostagem } from "../components/CardPostagem";
import { User, CardProps, PostCard } from "../components/Post";
import { homeStyles } from "../styles/home";
import { pageStyles } from "../styles/pageInitial";
import * as Token from "../utils/token";


export function Dashboard() {
    const [refreshing, setRefreshing] = useState(false);
    const user: User = { id: '', name: '', profileURL: '' }
    const card: CardProps = { user, title: '', content: '', date: new Date() }
    const [criarPostagemActive, setCriarPostagemActive] = useState(false);
    const [posts, setPosts] = useState([card]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getPosts();
        setRefreshing(false);
    }, []);

    const showCriarPostagem = async () => {
        if (criarPostagemActive) await getPosts();
        setCriarPostagemActive(!criarPostagemActive);
    }

    const getPosts = async () => {
        await axios.get(`http://${host}:3000/posts`, await Token._getHeader())
            .then((response): void => {
                const data: CardProps[] | undefined = response.data;
                console.log(data);

                if (data && data.length !== 0) {
                    if (data !== posts) {
                        setPosts([]);
                        setPosts(data);
                        console.log('\n//=------------------------------------------------=//\nPosts: ', posts);
                    }
                } else {
                    setPosts([]);
                }
            }).catch(error => console.error(error));
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <View style={homeStyles.screen}>
            <PageTitulo></PageTitulo>
            {criarPostagemActive ? <CriarPostagem closeFunc={showCriarPostagem} /> : null}
            <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: '100%' }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View style={homeStyles.containerView}>

                    <View>
                        <TouchableOpacity style={pageStyles.cardComponent} onPress={showCriarPostagem}>
                            <Text style={pageStyles.button}>Criar Postagem</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyles.postListView}>
                        {posts.length > 0 ? (
                            posts.map(post => (
                                <PostCard
                                    key={post.title}
                                    user={post.user}
                                    title={post.title}
                                    content={post.content}
                                    date={new Date(post.date)}
                                ></PostCard>
                            ))
                        ) : (
                            <View>
                                <Text>{posts.length}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );

}