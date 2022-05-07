import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodo } from '../../redux/action'

export const TodoInput = () => {
  const [query,setQuery] = useState("")
  const dispatch = useDispatch()
  const getRequest = () =>{
    fetch("http://localhost:3000/todo")
    .then(res =>res.json())
    .then((res)=>{
      dispatch(getTodo(res))
      setQuery("")
      
    })
  }
  const handleSubmit = () =>{
    fetch("http://localhost:3000/todo",{
      method: "POST",
      headers:{
       "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "title" :query,
        "status":false
      }),
    })
    .then(res => res.json())
    .then((res)=>{
      getRequest()
    })
    
  }
  
  return (
    <div>
      <input type="text" placeholder='Add Product' onChange={(e)=>setQuery(e.target.value)} />
      <button onClick={handleSubmit}>Add Item</button>
    </div>
  )
}
