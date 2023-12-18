import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { homeStyles } from "../styles/home";
import { SearchTitle } from "../components/Titulo";
import { searchStyles } from "../styles/search";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Search, Wind } from 'react-native-feather';
import vars from "../styles/root";
import { useContext, useEffect, useState } from "react";
import { getForumApi } from "../utils/forumApi";
import { UserContext } from "../contexts/user";
import { PostCard } from "../components/Post";
import { UserCard } from "../components/User";
import { CardEditar } from "../components/CardEditar";
import { CardDeletar } from "../components/CardDeletar";

export function SearchScreen() {
  const [searchTerm, setSerchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { user } = useContext(UserContext);

  const [selectedPost, setSelectedPost] = useState<any>(null);

  const [editPostOpen, setEditPostOpen] = useState(false);
  const [deletePostOpen, setDeletePostOpen] = useState(false);

  //Filtrando todos os posts
  const handlePosts = async () => {
    const forumApi = await getForumApi();
    await forumApi.get(`/filterPosts/${searchTerm}`).
      then(response => {
        const posts = response.data;
        setSearchResults(posts);
      })
      .catch(error => {
        // console.error('Erro ao buscar posts na rota de filtro:', error);
        throw error;
      });

  };
  // Filtrando usuário
  const handleUsers = async () => {
    const forumApi = await getForumApi();
    await forumApi.get(`/filterUsers/${searchTerm}`).
      then(response => {
        const posts = response.data;
        setSearchResults(posts);
      })
      .catch(error => {
        // console.error('Erro ao buscar posts na rota de filtro:', error);
        throw error;
      });

  };

  function setTheSelectedPost(postInfo: any) {
    setSelectedPost(postInfo);
  }

  const handleUserPosts = async () => {
    const forumApi = await getForumApi();
    await forumApi.get(`/posts/user/${user.username}`).
      then(response => {
        const posts = response.data;
        setSearchResults(posts);
      })
      .catch(error => {
        // console.error('Erro ao buscar posts na rota de filtro:', error);
        throw error;
      });
  };

  function openEditPost() {
    setEditPostOpen(!editPostOpen);
  }

  function getEditPostOpen() {
    return editPostOpen;
  }

  function openDeletePost() {
    setDeletePostOpen(!deletePostOpen);
  }

  function getDeletePostOpen() {
    return deletePostOpen;
  }

  function none() {

  }

  useEffect(() => {
    handleUserPosts();
  }, []);


  return (
    <View style={homeStyles.searchContainerView}>
      <SearchTitle></SearchTitle>
      {editPostOpen ? <CardEditar
        type="post"
        objectId={selectedPost.id}
        closeFunc={openEditPost}
        closeUseState={getEditPostOpen} 
        inputText={selectedPost.title} 
        contentText={selectedPost.content}      
        /> : null}
      {deletePostOpen ? <CardDeletar
        type="post"
        objectId={selectedPost.id}
        closeFunc={openDeletePost}
        closeUseState={getDeletePostOpen}
        logout={none} 
      /> : null}
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
      <ScrollView contentContainerStyle={{}}
        style={{ width: "100%", flexGrow: 1 }}
      >
        <View style={searchStyles.postListView}>
          {searchResults.length > 0 ? (
            searchResults.map((post, index) => {
              if (post.email) {
                return (
                  <UserCard
                    key={index}
                    id={post._id}
                    username={post.username}
                    profileURL={post.profileURL}
                    email={post.email}
                    score={post.score}
                    selectPost={setTheSelectedPost}
                  ></UserCard>
                );
              } else {
                return (
                  <PostCard
                    key={index}
                    id={post._id}
                    user={post.user}
                    title={post.title}
                    content={post.content}
                    date={new Date(post.date)}
                    screen="search"
                    selectPost={setTheSelectedPost}
                    openEditFunc={openEditPost}
                    openDeleteFunc={openDeletePost}

                  ></PostCard>
                );
              }
            })
          ) : (
            <View style={{
                width: "100%",
                height: "80%",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50,
            }}>
                <Wind
                    stroke={"#ffffff50"}
                    fill={"#00000000"}
                    width={50}
                    height={50}
                ></Wind>
                <Text style={{
                    color: "#ffffff50",
                    fontSize: 15,
                    marginTop: 10,
                    // padding: 20,
                }}>Não encontramos nenhuma postagem por enquanto...</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}