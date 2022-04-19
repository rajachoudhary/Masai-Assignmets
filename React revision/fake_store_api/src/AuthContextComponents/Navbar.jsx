import React, { useContext, useState } from 'react'
import axios from "axios"

import { context } from './Context'
const payload = {
    email: "",
    password:""
}

export const Navbar = () => {
    const [state,setState] = useState(payload)
    const[token,setToken] = useState("")
    const {isAuth,setIsAuth} = useContext(context)
   
    const handleInput = (e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleLogin = () =>{
        getToken()
        // console.log(state)
    }
    // console.log(state)
    const getToken = async()=>{
        try {
            const res = await axios.post( "https://reqres.in/api/login/", state );
            if(res){
                setToken(res.data.token)
                setIsAuth(false)
            }
          
        } catch ( err ) { 
            console.log( err )
          
        }
       
    }
  return (
    <div>
       {isAuth ? <div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={state.email} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input name="password" value={state.password} onChange={handleInput}/>
            </div>
            <button onClick={handleLogin}>Login</button>
       </div> : <div>
            <h2>Token : {token}</h2>
            <button onClick={()=>setIsAuth(true)}>LogOut</button>
       </div>}
       
        
    </div>
  )
}
