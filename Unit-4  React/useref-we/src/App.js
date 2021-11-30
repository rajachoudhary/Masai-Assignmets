import "./styles.css";
import React,{useEffect,useRef} from "react";
// import useEffect from "react"
// import useRef from "react"
export default function App() {

  const [state,setState] = React.useState(0)
  const timeRef = useRef(null);

  useEffect(()=>{
      return pauseTimer()
  },[])

  const startTimer= ()=> {
    if(timeRef.current === null){
      timeRef.current = setState(()=>{
        setState((prev)=> prev+1)
      },1000)
    }
  }
  const pauseTimer= ()=> {
    clearInterval(timeRef.current)
    timeRef.current= null;
  }
  const resetTimer= ()=> {
    pauseTimer()
    setState(0)
  }
  return (
    <div className="App">
      <h3>{state}</h3>
      <button onClick={startTimer}>START</button>
      <button onClick={pauseTimer}>PAUSE</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}
