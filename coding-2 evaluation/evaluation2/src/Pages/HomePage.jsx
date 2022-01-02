import { useDispatch } from "react-redux"
import { getData } from "./Home/Redux/Action"

export const  HomePage = ()=>{
    const dispatch  = useDispatch()
    getData(dispatch)
    return(
        <h1>HomePage</h1>
    )
}