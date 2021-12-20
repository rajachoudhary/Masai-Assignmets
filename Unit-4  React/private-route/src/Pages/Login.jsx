import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import style from "../CssFile/Button.module.css"

export const Login = () => {
  const [isAuth, { handleSignIn }] = useContext(AuthContext);

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div style={{width:"150px",margin:"auto"}}>
      <h1>Login</h1>
      <button onClick={handleSignIn} className={style.button}>Login</button>
    </div>
  );
};
