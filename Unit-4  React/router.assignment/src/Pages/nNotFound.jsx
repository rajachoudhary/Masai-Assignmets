import { Link } from "react-router-dom"

export const NotFound = ()=> {
    return(
        <>
        <div>Resource not found</div>
        <Link to="/">Go to Home Page</Link>
        </>
    )
}