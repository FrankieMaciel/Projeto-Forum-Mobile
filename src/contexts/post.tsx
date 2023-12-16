import { createContext, useState } from "react";
import { PostCardProps, ProviderProps } from "../@types/objects";

interface PostState {
  post: PostCardProps,
  setPost: React.Dispatch<React.SetStateAction<PostCardProps>>;
}

export const PostContext = createContext<PostState>({} as PostState);

export default function PostProvider({ children }: ProviderProps) {
  const [post, setPost] = useState<PostCardProps>({} as PostCardProps);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
}