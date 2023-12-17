import { useCallback, useContext, useEffect, useState } from "react";
import { PostCardComment } from "../components/PostComment";
import { PostContext } from "../contexts/post";
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { postStyles } from "../styles/post";
import { CommentCard } from "../components/Comment";
import { CommentCardProps, PostCardProps } from "../@types/objects";
import { getForumApi } from "../utils/forumApi";
import { CriarComentario } from "../components/CardComentario";


export function Comments() {

  const mockPost: PostCardProps = {
    id: '1',
    title: "Teste",
    user: {
      userID: "123",
      name: "Pessoa teste",
      profileURL: "./teste.png"
    },
    content: "Conteudo de Teste.",
    date: new Date(),
  };

  let { post } = useContext(PostContext);
  if (!post) post = mockPost;

  const [comments, setComments] = useState<CommentCardProps[]>([]);
  const [criarComentarioActive, setCriarComentarioActive] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getComments = async () => {
    if (!post) return;
    const forumApi = await getForumApi();
    await forumApi.get(`/comments/post/${post.id}`)
      .then(response => {
        const data = response.data;
        if (!data || data.length === 0) return;
        if (data === comments) return;

        setComments(data);
      })
      .catch(error => console.error(error));
  };

  const showCriarComentario = async () => {
    setCriarComentarioActive(!criarComentarioActive);
    if (criarComentarioActive) onRefresh();
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getComments();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <View style={postStyles.commentScreen}>
      {criarComentarioActive ? <CriarComentario closeFunc={showCriarComentario} closeUseState={() => criarComentarioActive} /> : null}
      <ScrollView
        contentContainerStyle={{ marginTop: '10%' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <PostCardComment
          key={post.title}
          id={post.id}
          user={post.user}
          title={post.title}
          content={post.content}
          date={new Date(post.date)}
        />
        <View>
          <TouchableOpacity style={postStyles.commentBtn} onPress={showCriarComentario}>
            <Text style={postStyles.commentBtnText}>Escrever comentário</Text>
          </TouchableOpacity>
          <View style={postStyles.commentsContainer}>
            {comments.length > 0
              ? (comments.map(comment => (
                <CommentCard
                  key={comment.content + comment.date}
                  user={comment.user}
                  postId={post.id || ''}
                  content={comment.content}
                  date={new Date(comment.date)}
                ></CommentCard>
              ))
              ) : (
                <Text style={postStyles.noComments}>Sem comentários...</Text>
              )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}