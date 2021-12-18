import React,{useContext} from "react"
import axios from "axios";
import { AuthContext } from "./AuthContextProvider"

const initialState = {
  email:"",
  password:"",
}

export const LoginForm = ()=>{
  const [state,setState] = React.useState(initialState)
  const [isIncorrect,setIsIncorrect] = React.useState(false)
  const {setIsAuth ,setIsLogin} = useContext(AuthContext)
  const handleInput = (e)=>{
    setState({...state, [e.target.name]:e.target.value})
    
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post( "https://reqres.in/api/login/", state );
        // console.log( res.data.token );
        if ( res.data.token ) {
            setIsAuth( true );
            const showData = await res()
            console.log(showData.data.token)

            setIsLogin( false );
            setIsIncorrect(false);
        }
        else {
            setIsIncorrect(true); 
            setIsAuth( false );
        };
    } catch ( err ) { 
        console.log( err )
        setIsIncorrect(true);
    }
}
  return(
    <form onSubmit={handleLogin} style={{width:"300px", margin:"auto"}}>
      <h1 style={{textAlign:"center"}}>Login</h1>
          { isIncorrect && <div>Incorrect Password or email</div> }
      <div style={{padding:"5px",fontSize:"20px",justifyContent:"space-between", margin:".5rem",display:"flex"}}>
        <label htmlFor="Email">Email</label>
        <input type="text" name="email" value = {state.email}placeholder="name" onChange={handleInput} required />
      </div>
      <div style={{padding:"5px",fontSize:"20px",justifyContent:"space-between", margin:".5rem",display:"flex"}}>
        <label htmlFor="Passowrd">Password</label>
      <input type="text"  name="password" value = {state.password} placeholder="password" onChange={handleInput} required/>
      </div>
      <input type="submit" value="Login" style={{fontSize:"20px",marginLeft:"100px",marginTop:"20px",}}/>
    </form>
  )
}