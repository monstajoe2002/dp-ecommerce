import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { User } from "../types/User";

export const AuthContext = createContext({
  user: {} as User,
  setUser: (user: User) => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage<User>("user", {} as User);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
