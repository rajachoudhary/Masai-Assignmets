import axios from "axios";
import React, { useEffect } from "react";
import { TodoInput } from "./TodoInput";

export const TodoApp = () => {
  const [todo, setTodo] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getData = () => {
    return axios.get("https://json-server-mocker-masai.herokuapp.com/tasks");
  };
  const createTodo = (title) => {
    const Payload = {
      title
    };
    const config = {
      url: "https://json-server-mocker-masai.herokuapp.com/tasks",
      method: "POST",
      data: Payload
    };
    return axios(config);
  };
  const handleInput = async (title) => {
    try {
      setIsLoading(true);
      await createTodo(title);
      const getInput = await getData();
      console.log(getInput.data);
      setTodo(getInput.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleInput();
  }, []);
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div style={{ width: "250px", margin: "auto", textAlign: "center" }}>
      <TodoInput handleAdd={handleInput} />
      {todo.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
