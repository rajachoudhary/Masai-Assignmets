import { useState } from "react";
import Header from "./Header";
import Button from "./Button";

export default function Counter() {
  const [counter, setcounter] = useState(0);
  const handleInc = (value) => {
    setcounter(counter + value);
  };

  const doubleTheCounter = (value) => {
    setcounter(counter * value);
  };

  return (
    <div className="App">
      <Header title={"Counter"} />
      <Header title={counter} />
      <Button title={"Add"} onClick={() => handleInc(1)} />
      <Button title={"Reduce"} onClick={() => handleInc(-1)} />
      <Button title={"Double"} onClick={() => doubleTheCounter(2)} />
    </div>
  );
}
