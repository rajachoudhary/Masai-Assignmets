import React from "react"
const Todo = () => {
  const [title,setTitle] = React.useState("");
  const[data,setData] = React.useState([]);
  const[isLoading, setIsLoading] = React.useState(true);
  const[isError,setIsError] = React.useState(false);
  const [page,setPage] = React.useState(1);

  React.useEffect(()=>{
    getTodos(page);
  },[page]);

  const getTodos = (page=1)=>{
    setIsLoading(true)
    return fetch (`https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=2`)
    .then((res)=> res.json())
    .then((res)=>{
      setData(res)
    })
    .catch((err) => {
      setIsError(false)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  };

  const addTodos = (title) => {
    const payload ={
      title,
      status:false
    }
    setIsLoading(true)
    return fetch (`https://json-server-mocker-masai.herokuapp.com/tasks`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload)
    })
    .then((res)=> res.json())
    .then((res)=>{
      return getTodos()
    })
    .catch((err) => {
      setIsLoading(false)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }
  return isLoading ? <div>....Loading</div> : isError ? <div>Something Went Wrong</div> :(
    <div>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Write here"/>
      <button onClick={()=>addTodos(title)}>ADD</button>
      <ul>
      {data.map((item)=> (
        <li key = {item.id}>{`${item.title}-${item.status}`}</li>
      ))}
      </ul>
      <h3>Page:{page}</h3>
      <button onClick={()=>setPage(page-1)}>PREVIOUS</button>
      <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}
export {Todo};