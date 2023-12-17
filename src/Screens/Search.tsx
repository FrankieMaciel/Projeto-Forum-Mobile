import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { homeStyles } from "../styles/home";
import { SearchTitle } from "../components/Titulo";
import { searchStyles } from "../styles/search";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Loader, Search } from 'react-native-feather';
import vars from "../styles/root";
import { useContext, useEffect, useState } from "react";
import { getForumApi } from "../utils/forumApi";
import { UserContext } from "../contexts/user";
import { PostCard } from "../components/Post";
import { PostCardProps } from "../@types/objects";
import { UserCard } from "../components/User";

export function SearchScreen() {
    const [searchTerm, setSerchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const { user } = useContext(UserContext);
    
    //Filtrando todos os posts
    const handlePosts = async () => {
      const forumApi = await getForumApi();
      console.log(searchTerm);
      await forumApi.get(`/filterPosts/${searchTerm}`).
      then(response =>{
        const posts = response.data
        console.log('Posts obtidos da API:', posts);
        setSearchResults(posts);
      })
      .catch(error => {
        console.error('Erro ao buscar posts na rota de filtro:', error);
        throw error; 
      })

    }
    // Filtrando usuário
    const handleUsers = async () => {
      const forumApi = await getForumApi();
      await forumApi.get(`/filterUsers/${searchTerm}`).
      then(response =>{
        const posts = response.data
        console.log('Posts obtidos da API:', posts);
        setSearchResults(posts);
      })
      .catch(error => {
        console.error('Erro ao buscar posts na rota de filtro:', error);
        throw error; 
      })

    }

    const handleUserPosts = async () => {
      const forumApi = await getForumApi();
      await forumApi.get(`/posts/user/${user.username}`).
      then(response =>{
        const posts = response.data
        console.log('Posts obtidos da API:', posts);
        setSearchResults(posts);
      })
      .catch(error => {
        console.error('Erro ao buscar posts na rota de filtro:', error);
        throw error;
      })
    }

  useEffect(() => {
    handleUserPosts();
  }, []);


  return (
  <View style={homeStyles.searchContainerView}>
      <SearchTitle></SearchTitle>
      <View style={searchStyles.ViewOnTop}>
        <View style={searchStyles.searchArea}>
          <View style={searchStyles.searchIcon}>
            <Search
              stroke={vars.gray}
              fill="#00000000"
              width={20}
              height={20}
            />
          </View>
          <TextInput onChangeText={setSerchTerm} style={searchStyles.input}></TextInput>
        </View>
        <View style={searchStyles.sillyButtons}>
          <TouchableOpacity onPress={handleUserPosts} style={searchStyles.button}>
            <Text>Meus posts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUsers} style={searchStyles.button}>
            <Text>Pessoas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={searchStyles.button} onPress={handlePosts}>
            <Text>Posts</Text>
          </TouchableOpacity>
        </View>
      </View>
        <ScrollView contentContainerStyle={
          { 
          
          }
          }
          style={{
            width: "100%",
            flexGrow: 1,

          }}
          >
          <View style={searchStyles.postListView}>
            {searchResults.length > 0 ? (
                searchResults.map(post => {
                    if (post.email) {
                        return (
                          <UserCard 
                            key={post._id}
                            id={post._id} 
                            username={post.username}
                            profileURL={post.profileURL}
                            email={post.email}
                            score={post.score}                              
                            ></UserCard>
                        );
                    } else {
                        return (
                            <PostCard
                                key={post._id}
                                id={post.id}
                                user={post.user}
                                title={post.title}
                                content={post.content}
                                date={new Date(post.date)}
                            ></PostCard>
                        );
                    }
                  })
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
        </ScrollView>
    </View>
  );
}