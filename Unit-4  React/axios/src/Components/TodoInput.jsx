import React from "react";
const TodoInput = ({ onSubmit }) => {
  const [title, setTitle] = React.useState("");

  return (
    <div>
      <input
        placeholder="Write here"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => onSubmit(title)}>Submit</button>
    </div>
  );
};
export { TodoInput };
