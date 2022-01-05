import { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { gitSearch } from "../Home/Redux/ActionType"



export const HomePage = ()=>{
    const [title,setTitle] = useState("")
    const dispatch = useDispatch()
    const { search, isLoading, isError  } = useSelector(state=>state.git, shallowEqual); 
    console.log(search)
    const handleSearch = ()=>{
        gitSearch(title,dispatch)
    }
    return(
        <>
        <div style={{width:"300px",margin:"auto",padding:"10px"}} >
            <input type="text" placeholder="Search User" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={()=>handleSearch(title)}>SEARCH</button>
        </div>
        
        </>
    )
}