import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display:"flex",fontSize:"25px", padding:"15px",width:"500px",margin:"auto",gap:"2rem"}}>
        <Link to="/">Home</Link>
        <Link to="/employee">Employees</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}
