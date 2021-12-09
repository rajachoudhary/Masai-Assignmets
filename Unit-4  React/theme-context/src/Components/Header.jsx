import { AppContext } from "../Context/AppContextProvider";
import React, { useContext } from "react";
import { ThemeContest } from "../Context/ThemeContestProvider";
// import ThemeContestProvider from "../Context/ThemeContestProvider"
const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme }, ToggleTheme] = useContext(ThemeContest);
  return (
    <>
      <div>
        {isAuth ? (
          <button onClick={() => setIsAuth(false)}>Sign In</button>
        ) : (
          <button onClick={() => setIsAuth(true)}>Sign Out</button>
        )}
      </div>
      <button onClick={ToggleTheme}>
        Toggle Theme to {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
};
export default Header;
