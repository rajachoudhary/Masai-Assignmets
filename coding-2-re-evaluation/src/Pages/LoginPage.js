import { useDispatch } from "react-redux";
import { loginSuccess } from "../Auth/Redux/Action";


export const Login = ()=> {
    const dispatch = useDispatch()
    const handleLogin = ()=>{
        dispatch(loginSuccess())
    }
  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleLogin}>Please click on this to login</button>
    </div>
  );
}


