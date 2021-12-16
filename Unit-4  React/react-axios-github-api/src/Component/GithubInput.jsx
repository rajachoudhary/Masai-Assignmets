import React from "react";
import style from "./github.module.css"
export const GithubInput = ({ handleSearch }) => {
  const [title, setTitle] = React.useState("");

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Search User"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleSearch(title)}>Search</button>
    </div>
  );
};
