// import React from "react"
import React, { useState, createContext } from "react";
export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AppContext.Provider value={[isAuth, setIsAuth]}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
