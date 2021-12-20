import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import style from "../CssFile/Button.module.css"

export const Dashboard = () => {
  const [{ handleSignOut }] = useContext(AuthContext);

  return (
    <div style={{width:"150px",margin:"auto"}}>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut} className={style.button}>Sign Out</button>
    </div>
  );
};
