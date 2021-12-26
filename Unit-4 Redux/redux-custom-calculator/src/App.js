import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Redux/Action";
export default function App() {
  const count = useSelector((state) => state);
  // console.log(state)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}
