import React, { useEffect } from "react";
import axios from "axios";
import { GithubInput } from "./GithubInput";
import style from "./github.module.css";

const handleUsers = (title) => {
  return axios.get("https://api.github.com/search/users", {
    params: {
      q: title
    }
  });
};
export const Github = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [getInfo, setGetInfo] = React.useState([]);

  const handleUsersdetail = async (title) => {
    try {
      setIsLoading(true);
      const { data } = await handleUsers(title);
      setGetInfo(data.items);
      console.log(data.items);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <GithubInput handleSearch={handleUsersdetail} />
      {getInfo.map((item) => (
        <div key={item.id} className={style.card}>
          <div>{item.login}</div>
          <img src={item.avatar_url} alt="profile" />
        </div>
      ))}
    </div>
  );
};
