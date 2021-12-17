import {Link} from "react-router-dom"
import style from "../Css/navbar.module.css"
export const Navbar = ()=>{
    return(
        <div className={style.link}>
            <div>
                <Link to="/"> 
                    <img className={style.homeIcon} src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171109424/89209165-ecommerce-icon-isolated-on-orange-round-button-abstract-illustration.jpg" alt="icon" /> 
                </Link>
                <Link to="/mens">Mens</Link>
                <Link to="/womens">Womens</Link>
                <Link to="/children">Children</Link>
                <Link to="/electronics">Electronics</Link>
            </div>
            <div>
                <Link to="/pricing">Pricing</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/Login">Login</Link>
            </div>
        </div>
    )
}