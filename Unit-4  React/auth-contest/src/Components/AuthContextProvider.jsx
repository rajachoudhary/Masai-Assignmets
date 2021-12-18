import { createContext } from "react";
import React from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
