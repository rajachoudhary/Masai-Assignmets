import React from 'react'
import { TodoList } from './TodoList'
import style from "../todo.module.css"

export const TodoItem = () => {
  const[input,setInput]= React.useState("")
  const [data,setData] = React.useState([])
  const handleAdd = ()=>{
    let Payload = {
      title:input,
    }
     let updatedTodo = [...data,Payload] 
     setData(updatedTodo)
  }
  return (
    <div >
      <div className={style.todoInput}>
      <label>Product</label>
      <input type="text" value={input} onChange={(e)=>setInput(e.currentTarget.value)}/>
      <button  onClick={()=>handleAdd()}>Add</button>
      </div>
      {
        data.map((item)=> <TodoList key={item.id} {...item}/>)
      }
    </div>
  )
}
