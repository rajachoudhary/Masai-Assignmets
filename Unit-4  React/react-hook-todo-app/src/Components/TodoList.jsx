import style from "./CSS/Todo.module.css"

const TodoList = ({title,status,id,handleRemove,handleToggle})=>{
 
  return(
    <div className={style.todo}>
      <div>
        <h3>{title}</h3>
      </div>
        <button onClick={()=>handleRemove(id)}>DELETE</button>
        <button onClick={()=>handleToggle(id)}>{status?"True":"False"}</button>
    </div>
  )
}
export default TodoList;