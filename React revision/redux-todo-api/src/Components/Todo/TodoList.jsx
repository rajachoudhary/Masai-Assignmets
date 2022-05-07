import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getTodo } from '../../redux/action'
export const TodoList = () => {
  const {todos} = useSelector(state =>state)
  const dispatch  = useDispatch()
  const getData = ()=>{
    fetch(`http://localhost:3000/todo`)
    .then(res => res.json())
    .then((res)=>{
      dispatch(getTodo(res))
    })
  }
  const handleDelete = (id)=>{
    fetch(`http://localhost:3000/todo/${id}`,{
      method:"DELETE"
    })
    // .then(res=>res.json())
    .then((res)=>{
      getData()
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      {
        todos.map((item)=>{
          return(
            <div key={item.id}>
              <div>{item.title}</div>
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}
