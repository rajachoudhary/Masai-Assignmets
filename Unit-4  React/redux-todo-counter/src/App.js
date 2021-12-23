import { AppContext } from "./Redux/AppContextProvider";
import "./styles.css";
import React from "react";
import { Counter } from "./Count/Counter";

export default function App() {
  const { getState } = React.useContext(AppContext)[1];
  const { count } = getState();
  console.log(getState);
  return (
    <div className="App">
      <h1>{count}</h1>
      <Counter />
    </div>
  );
}
