import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Github } from "./Component/Github";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Github />
  </StrictMode>,
  rootElement
);
