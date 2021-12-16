import { useContext } from "react"
import { ThemeContext } from "../ContextApi/ThemeContestProvider"
// import {ThemeContestProvider} from "../ContextApi/ThemeContestProvider"

export const Body = ()=>{
  const [{theme,themeData},toggleTheme] = useContext(ThemeContext)
   const currentTheme =themeData[theme]
  return(
    <div style = {{backgroundColor:currentTheme.color,height:"400px"}}>
      <button onClick={toggleTheme} style={{marginLeft:"700px",padding:"10px",marginTop:"50px"}}>change to {theme ==="light"?"dark":"light"}</button>
    </div>
  )
}