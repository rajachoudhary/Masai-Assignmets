import { useRef } from "react";

const Button = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <div>
      <input ref={inputEl} placeholder="To focus here click on focus" />
      <button onClick={onButtonClick}>FOCUS</button>
    </div>
  );
};
export { Button };
