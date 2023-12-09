import { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, RefreshControl } from "react-native";
import { PageTitulo } from "../components/Titulo";
import { CriarPostagem } from "../components/CardPostagem";
import { User, CardProps, PostCard } from "../components/Post";
import { homeStyles } from "../styles/home";
import { pageStyles } from "../styles/pageInitial";
import { getForumApi } from "../utils/forumApi";

const user: User = { id: '', name: '', profileURL: '' }
const Card: CardProps = { user, title: '', content: '', date: new Date() }

interface Card {
    user: {
        id: string,
        name: string,
        profileURL: string
    },
    title: string,
    content: string,
    date: Date
};

export function Dashboard() {
    const [refreshing, setRefreshing] = useState(false);
    const [criarPostagemActive, setCriarPostagemActive] = useState(false);
    const [posts, setPosts] = useState<Card[]>([]);

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
        const forumApi = await getForumApi();
        await forumApi.get(`/posts`)
            .then((response): void => {
                const data: CardProps[] | undefined = response.data;

                if (!data) return;
                if (data === posts) return;
                let Revdata = data.reverse();
                setPosts(Revdata);

            })
            .catch(error => console.error(error));
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