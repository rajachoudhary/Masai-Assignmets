import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { TodoApp } from "./Component/Todo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodoApp/>
  </StrictMode>,
  rootElement
);
