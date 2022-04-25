import React from 'react'
import { useSelector } from 'react-redux'
// import { store } from '../redux/store'

export const TodoList = () => {
    const {todos} = useSelector(state => state)
    const handleDelete = ()=>{
        
    }
  return (
    <div>
        {
            todos.map((item)=>{
                return(
                    <div style={{display:"flex"}}>
                        <div>{item}</div>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                    
                )
            })
        }
    </div>
  )
}
