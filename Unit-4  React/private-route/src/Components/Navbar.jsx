import { Link } from "react-router-dom";
import React from "react";
import style from "../CssFile/Navbar.module.css"
export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/setting">Settings</Link>
    </div>
  );
};
