import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";

export const Navbar = () => {
  const { setIsLogin,isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div style={{display:"flex",gap:"2rem", width:"200px",margin:"auto"}}>
      <div style={{fontSize:"20px",}}>Navbar</div>
      {isAuth ? (
        <button onClick={() => setIsAuth(false)}>Sign Out</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Sign in</button>
      )}
    </div>
  );
};
