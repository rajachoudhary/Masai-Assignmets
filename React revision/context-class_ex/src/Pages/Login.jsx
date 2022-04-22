import React from 'react'

export const Login = () => {
  const [input,setInput] = React.useState({
    email:"",
    password:""
  })
  return (
    <div>
      <div>
        <label>Email</label>
        <input type="email" name="Email" value={input.email}/>
      </div>
      <div>
        <label>Password</label>
        <input type="email" name="Password" value={input.password}/>
      </div>
    </div>
  )
}
