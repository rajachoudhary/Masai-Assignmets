import { useState } from "react"

const TodoInput = ({onTaskCreate}) => {
  const [text,setText] = useState("")
  const handleChange = (e)=>{
    // console.log(e.target.value)
    setText(e.target.value)
  }
  const handleClick = ()=>{
    onTaskCreate(text)
  }
  return(
    <div>
      <input type="text" 
      placeholder="Add Product"
      value={text}
      onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
export default TodoInput