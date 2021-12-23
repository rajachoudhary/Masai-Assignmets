import React, { createContext, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ store, children }) => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount((prev) => prev + 1);
      // console.log(count);
    });
    return unsubscribe;
  });
  return (
    <AppContext.Provider value={[count, store]}>{children}</AppContext.Provider>
  );
};
