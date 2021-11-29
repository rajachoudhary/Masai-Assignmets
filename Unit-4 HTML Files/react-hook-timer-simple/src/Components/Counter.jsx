import React from "react";
// import useState from "react";
const Counter = () => {
  const [count,setCount] = React.useState(0);

  React.useState (() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if(prev === 10){
          clearInterval(id)
          return prev
        }
        return prev+1
      });
    },1000);
    return ()=> {
      clearInterval(id)
    }
  },[]);
  return(
    <>
    <h1>Counter : {count}</h1>
    </>
  )
}
export {Counter}