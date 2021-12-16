import React from "react"

export const TodoInput = ({handleAdd})=>{
  const [title,setTitle] = React.useState("")
  return(
    <div style={{width:"250px",margin:"auto"}}>
      <input type="text" value = {title} placeholder="Write Something" onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={() => handleAdd(title)}>ADD</button>
    </div>
  )
}