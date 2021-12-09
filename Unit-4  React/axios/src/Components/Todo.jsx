import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TodoInput } from "./TodoInput";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  ///GET data
  const getTodos = () => {
    const config = {
      url: "https://json-server-mocker-masai.herokuapp.com/tasks",
      method: "get"
    };
    return axios(config);
  };
  // POST DATA
  const createTodo = (title) => {
    const Payload = {
      title,
      status: false
    };
    const config = {
      url: "https://json-server-mocker-masai.herokuapp.com/tasks",
      method: "post",
      data: Payload
    };
    return axios(config);
  };

  const handleDelete = async (id) => {
    try {
      const config = {
        url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
        method: "delete"
      };
      await axios(config);
    } catch (err) {
      ////error
    }
    handleGetTodos();
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  const handleGetTodos = () => {
    setIsLoading(true);
    return getTodos()
      .then((res) => {
        setTodo(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const handleSubmit = async (title) => {
    try {
      setIsLoading(true);
      await createTodo(title);
      await handleGetTodos();
      setIsLoading(false);
    } catch (err) {
      console.log("error");
    }
  };

  const updateTodo = (id, status) => {
    return axios({
      url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
      method: "patch",
      data: {
        status: status
      }
    });
  };

  const handleToggle = async(id,status) => {
    try{
      const config = {
        url:`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
        method:"patch",
        data: {
          status:!status
        }
      }
      await axios(config)
    }
    catch(err){

    }
    handleGetTodos()
  }
  const markEverythingComplete = async () => {
    try {
      const ids = todo.map((item) => item.id);

      for (let id of ids) {
        console.log(id);
        await updateTodo(id, true);
      }
      await handleGetTodos();
    } catch (err) {
      console.log("error");
    }
  };
  if (isLoading) {
    return <div>.......Loading</div>;
  }
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      {todo.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", justifyContent: "center", margin: "30px" }}
        >
          <div style={{ padding: "5px" }}>{item.title}</div>
          <button style={{ padding:"5px",marginLeft:"15px" }} onClick={()=>handleToggle(item.id,item.status)}>
            {item.status ? "Done" : "Not Done"}
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            style={{ padding: "5px",marginLeft:"15px"  }}
          >
            DELETE
          </button>
         
        </div>
      ))}
      <div>
        <button onClick={markEverythingComplete}>
          Mark everything complete
        </button>
      </div>
    </div>
  );
};
export { Todo };
