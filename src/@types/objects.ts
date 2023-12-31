export interface Location {
  lat: string,
  lng: string;
}

export interface User {
  id: string,
  username: string,
  profileURL?: string,
  location?: Location,
  email: string,
  score: number,
}

export interface ProviderProps {
  children: React.ReactNode;
}

export interface CardUser {
  userID: string;
  name: string;
  profileURL: string;
}

export interface CardProps {
  user: CardUser;
  content: string;
  date: Date;
}

export interface PostCardProps extends CardProps {
  id: string;
  title: string;
}

export interface CommentCardProps extends CardProps {
  postId: string;
}

export interface ModalProps {
  closeFunc: () => void;
  closeUseState: () => boolean;
}

export interface ActionModalProps extends ModalProps {
  objectId: string | null;
}