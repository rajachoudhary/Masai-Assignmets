import "./styles.css";
import React from "react"
import {Counter} from "./Components/Counter"
export default function App() {
  const [showCounter, setShowCounter] = React.useState(false)
  return (
    <div className="App">
     {showCounter &&<Counter/>}
     <button onClick={()=> setShowCounter(!showCounter)}>SHOW</button>
    </div>
  );
}
