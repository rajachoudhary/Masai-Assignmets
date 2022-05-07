import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { privateRoute } from '../Redux/action'

export const LoginPage = () => {
  const privateUser = useSelector(state=>state.privateUser)
  const dispatch = useDispatch()
  console.log(privateUser,"privateUser")
  
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
        dispatch(privateRoute(true))
        navigate("/employee")
      })
    } else {
      alert("InCorrect email and password")
    }
   
  }
  const handleLogout = ()=>{
    dispatch(privateRoute(false))
  }
 
  
  return (
    <div>
      {
        privateUser ? <button style={{}}onClick={handleLogout}>Logout</button> :<div style={{width:"300px",margin:"auto"}}>
        <div style={{display:"flex", justifyContent:"space-between",padding:"15px 0"}}>
          <label>Email</label>
          <input type="email" name="email" value={input.email} onChange={(e)=>handleInput(e)}/>
        </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <label>Password</label>
        <input type="password" name="password" value={input.password} onChange={(e)=>handleInput(e)}/>
      </div>
        <button onClick={handleSubmit} disabled={input.email==="" ||input.password===""}>Submit</button> 
      </div> 
      }
      
       
      
    </div>
  )
}
