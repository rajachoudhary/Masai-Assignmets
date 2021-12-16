import { createContext } from "react";
import React from "react"
export const ThemeContext = createContext()
  const themes = {
    dark:{
      color:"black"
    },
    light:{
      color:"white"
    }

  }
export const ThemeContextProvider = ({children})=> {
  const [theme,setTheme] = React.useState("light")
  const themeData = themes;

  const toggleTheme = ()=>{
    setTheme(theme === "light" ? "dark" : "light")
  }
  return(
    <ThemeContext.Provider value = {[{themeData,theme},toggleTheme]} >
      {children}
    </ThemeContext.Provider>
  )
}