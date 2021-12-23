import { useContext } from "react";
import { incrementCounter } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";

export const Counter = () => {
  const { dispatch } = useContext(AppContext)[1];
  // console.log(dispatch);
  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };
  return (
    <div>
      <button onClick={handleIncrement}>INCREMENT</button>
    </div>
  );
};
