import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <div style={{display:"flex",gap:"2rem",width:"300px",justifyContent:"end",fontSize:"20px"}}>
            <Link to="/">Home</Link>
            <Link to="/searchPage">Search Page</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}