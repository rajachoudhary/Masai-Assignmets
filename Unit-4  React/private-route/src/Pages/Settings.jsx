import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import style from "../CssFile/Button.module.css"

export  const Settings = ()=>{
  const [isAuth,{handleSignOut}] = useContext(AuthContext)
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return(
    <div style={{width:"150px",margin:"auto"}}>
      <h1>settings</h1>
      <button onClick={handleSignOut} className={style.button}>Sign Out</button>
    </div>
  )
} 