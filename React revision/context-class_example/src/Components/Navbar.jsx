import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
export const Navbar = () => {
  return (
    <div className="navlink">
      <Link to="/">Home</Link>
      <Link to="aboutUs">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="users">Users</Link>
      <Link to="login">Login</Link>
    </div>
  );
};
