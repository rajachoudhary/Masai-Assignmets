import React, {useContext} from "react"
import { AuthContext } from "./AuthContextProvider";
import { LoginForm } from "./LoginForm";
import { Navbar } from "./Navbar";

 export const AuthContextApp = () => {
  const { isAuth, isLogin } = useContext(AuthContext );
  
  return ( 
      <div>
          <Navbar />
          { 
              !isAuth && isLogin && <LoginForm />
          }
      </div>
  )
}