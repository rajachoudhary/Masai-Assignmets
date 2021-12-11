import React from 'react'
import {Link} from "react-router-dom"
import style from "../css/Navbar.module.css"
export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link to="/">Home</Link>
            <Link to="/Users">Users</Link>
            <Link to="/About">About</Link>
        </div>
    )
}
