import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <div style={{display:"flex",gap:"2rem",fontSize:"25px",padding:"1rem", backgroundColor:"brown",justifyContent:"end"}}>
           <Link to="/">Home</Link>
           <Link to="/cart">Cart</Link>
        </div>
    )
}