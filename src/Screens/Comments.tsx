import { PostCardComment } from "../components/PostComment"


export function Comments() {

  let post = {
    title: "Teste",
    user: {
      id: "123",
      name: "Pessoa teste",
      profileURL: "./teste.png"
    },
    content: "Conteudo de Teste.",
    date: new Date(),
  }

  return (
    <>
    <PostCardComment
      key={post.title}
      user={post.user}
      title={post.title}
      content={post.content}
      date={new Date(post.date)}
    />
    </>
  )
}