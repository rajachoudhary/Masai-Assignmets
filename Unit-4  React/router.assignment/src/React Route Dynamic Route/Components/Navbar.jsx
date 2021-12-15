import { Link } from "react-router-dom"

 export const ProductNavbar = ()=> {
    return(
        <div style={{width:"300px",margin:"auto",fontSize:"25px",gap:"3rem",display:"flex",justifyContent:"center"}}>
            <Link to="/">Home</Link>
            <Link to="/product">All Product</Link>
            {/* <Link to="/product">Home</Link> */}
        </div>
    )
}