import { useState } from "react"

export const HomePage = ({handleSearch})=>{
    const [title,setTitle] = useState("")
    return(
        <div style={{width:"300px",margin:"auto",padding:"10px"}} >
            <input type="text" placeholder="Search User" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={()=>handleSearch(title)}>SEARCH</button>
        </div>
    )
}