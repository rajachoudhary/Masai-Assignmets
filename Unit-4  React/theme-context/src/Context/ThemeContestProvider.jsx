import React, { useState } from "react";

export const ThemeContest = React.createContext();
const themes = {
  dark: {
    color: "white",
    backgroundColor: "black"
  },
  light: {
    color: "black",
    backgroundColor: "white"
  }
};
const ThemeContestProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeData = themes;
  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const value = [{ themeData, theme }, ToggleTheme];

  return (
    <ThemeContest.Provider value={value}>{children}</ThemeContest.Provider>
  );
};
export default ThemeContestProvider;
