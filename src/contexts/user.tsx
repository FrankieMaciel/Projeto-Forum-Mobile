import React, { createContext, useState } from "react";
import { ProviderProps, User } from "../@types/objects";

interface UserState {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserState>({} as UserState);

export default function UserProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}