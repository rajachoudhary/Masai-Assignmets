import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"2rem",justifyContent:"center"}}>
      <Link to="/">Home</Link>
      <Link to="/Users">Users</Link>
      <Link to="/About">About</Link>
    </div>
  );
};
export default Navbar;
