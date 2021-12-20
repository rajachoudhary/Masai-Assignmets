import { createContext } from "react";
import React from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  console.log(!isAuth);
  const handleSignIn = () => {
    if (!isAuth) {
      setIsAuth(true);
    } else {
      return true;
    }
  };
  const handleSignOut = () => {
    if (isAuth) {
      setIsAuth(false);
    } else {
      return false;
    }
  };
  const isSignIn = () => {
    return isAuth;
  };
  const value = [isAuth, { handleSignIn, handleSignOut, isSignIn }];
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
