import { Link } from "react-router-dom"
import style from "../Css/Footer.module.css"
export const Footer = ()=>{
    return(
        <div className={style.footer}>    
            <Link to="/about">About Us </Link>
            <Link to="/faq">Faq</Link>
            <Link to="/contact">Contact US</Link>  
        </div>
    )
}