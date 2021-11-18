const TodoItem = ({id,status,title,handleDelete,handleToggle}) =>{
  return(
    <div>
      <span>{`${title} - ${status}` }</span>
      <button onClick={()=>handleDelete(id)}>Delete</button>
      <button onClick={()=>handleToggle(id)}>Toggle</button>
    </div>
  )
}
export default TodoItem