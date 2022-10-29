import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../service/local-storage";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user");
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
