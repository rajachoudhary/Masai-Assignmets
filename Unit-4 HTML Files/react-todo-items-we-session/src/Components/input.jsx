import React from "react"
import ShowTasks from "./ShowTasks"
function Tasks ()  {
  let [input, setInput] = React.useState("");
  let [tasks,setTasks] = React.useState([])

  let handleInput = (e) => {
    let { value } = e.target;
    setInput(value);
  };

  let handleAdd = () => {
    let payload = {
        title:input,
        status:false
    }
    let newTasks = [...tasks,payload]
    setTasks(newTasks)
  }
  
  return (
    <>
      <h1>Task</h1>
      <input style={{marginBottom:"20px"}} value={input} placeholder="Write here" onChange={handleInput} />
      <button onClick={handleAdd}>ADD</button>
      {tasks.map((item,status) => {
        return <ShowTasks title={item.title} status={item.status}/>
      })}
    </>
  );
};
export default Tasks;
