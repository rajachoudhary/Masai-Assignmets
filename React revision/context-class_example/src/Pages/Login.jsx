import React from 'react'
const payload = {
  email: "",
  password:""
}
export const Login = () => {
  const state = React.useState("raja")
  console.log(state)
  const [input,setInput] = React.useState({
    email: "",
    password:""
  })
  const handleInput = (e)=>{
    // setInput({...input,[e.target.name]:e.target.value})
    const {name,value} = e.target
    setInput({
      ...input,
      [name]:value
    })
    console.log(typeof e.target)

  }
  const handleSubmit = ()=>{
      
  }
  return (
    <div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={input.email} onChange={handleInput}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={input.password} onChange={handleInput}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
