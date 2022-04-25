import React, { useContext, useEffect } from 'react'
import { navigate, useNavigate } from 'react-router-dom'
import { context } from '../Context/AuthContext'
import "../App.css"

export const Login = () => {
  const {isAuth,setIsAuth} = useContext(context)
  
  const [input,setInput] = React.useState({
    email: "",
    password:""
  })
  const handleInput = (e)=>{
    const {name,value} = e.target
    setInput({
      ...input,
      [name]:value
    })
    
  }
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    if(input.email === "eve.holt@reqres.in" && input.password === "cityslicka"){
      fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify(input),
        headers: {
          "Content-type": "application/json"
      }
      })
      .then(res => res.json())
      .then((res)=>{
        // console.log(res)
        setIsAuth(true)
        navigate("/users")
        setInput(res.token)
        
      })
    } else {
      alert("InCorrect email and password")
    }
   
  }
  const handleLogout = ()=>{
    setIsAuth(false)
  }
  
  return (
    <div>
      {!isAuth ? 
      <div className='Form'>
      <div className="inputForm">
        <label>Email</label>
        <input type="email" name="email" value={input.email} onChange={(e)=>handleInput(e)}/>
      </div>
      <div className="inputForm">
        <label>Password</label>
        <input type="password" name="password" value={input.password} onChange={(e)=>handleInput(e)}/>
      </div>
      <button onClick={handleSubmit} disabled={input.email==="" ||input.password===""}>Submit</button> 
      </div>
      : 
      <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}
