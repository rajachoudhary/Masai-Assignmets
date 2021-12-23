import React from "react";
export const TodoInput = ({ onAdd }) => {
  const [state, setstate] = React.useState(" ");
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        gap: "2rem",
        margin: "auto",
        padding: "15px"
      }}
    >
      <input
        type="text"
        placeholder="Add Product"
        onChange={(e) => setstate(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd(state);
          setstate("");
        }}
      >
        ADD
      </button>
    </div>
  );
};
