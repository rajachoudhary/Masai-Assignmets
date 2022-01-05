import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <div style={{display:"flex",gap:"2rem",fontSize:"20px",backgroundColor:"brown",padding:"10px"}}>
            <Link to="/">Home</Link>
            <Link to="/searchPage">Search Page</Link>
        </div>
    )
}