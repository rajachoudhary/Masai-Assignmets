import {useState } from "react";
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

const Todo = () =>{
  const [todos,setTodos] = useState([])
  const handleTaskCreate = (title)=>{
    const payload = {
      title:title,
      status:"false",
      id:todos.length+1
    }
    setTodos([...todos,payload])
  }  
 const handleDelete = (id) =>{
    setTodos(todos.filter((item) => item.id !== id))
 }
 const handleToggle = (id) => {
   const updatedTodos = todos.map((item)=>
   item.id === id ? {...item,status:!item.status}:item)
   setTodos(updatedTodos)
 }
  return( 
  <>
    <h1> Todo List</h1>
    <TodoInput onTaskCreate={handleTaskCreate}/>
    {todos.map( (todo)=>{
      return (
        <TodoItem
        title={todo.title} 
        status={todo.status} 
        key= {todo.id}
        id={todo.id}
        handleDelete={handleDelete}
        handleToggle = {handleToggle}/>
      )
    })}  
  </>
  )
  
}

export default Todo;