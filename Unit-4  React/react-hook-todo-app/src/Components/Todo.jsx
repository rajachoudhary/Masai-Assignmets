import React from "react";
import style from "./CSS/Todo.module.css"
import TodoList from "./TodoList";
const Todo = () => {
  const [title, setTitle] = React.useState("");
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getTodos(page);
  }, [page]);

  const getTodos = (page = 1) => {
    setIsLoading(true);
    return fetch(
      `https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=2`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setIsError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addTodos = (title) => {
    const payload = {
      title,
      status: false
    };
    setIsLoading(true);
    return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((err) => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleDelete = (id)=>{
    const payload = {
      title,
      status: false
    };
    setIsLoading(true);
    return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((err) => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleStatus = (id) => {
     const changeStatus = data.filter((item)=>item.id === id)[0]
     changeStatus.status = !changeStatus.status
    setIsLoading(true);
    return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(changeStatus)
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((err) => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  
  return isLoading ? (
    <div>....Loading</div>
  ) : isError ? (
    <div>Something Went Wrong</div>
  ) : (
    <div>
      <input
        className={style.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write here"
      />
      <button className={style.addButton} onClick={() => addTodos(title)}>ADD</button>
      <ul>
        {data.map((item) => (
          
          <TodoList {...item} key={item.id}  handleRemove={handleDelete} handleToggle={handleStatus}/>
          
        ))}
      </ul>
      <h3>Page:{page}</h3>
      <button onClick={() => setPage(page - 1)}>PREVIOUS</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
export { Todo };
