import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { ThemeContest } from "../Context/ThemeContestProvider";

const Body = () => {
  const [isAuth] = useContext(AppContext);
  const [{ theme, themeData }] = useContext(ThemeContest);
  // console.log(theme)
  let currentTheme = themeData[theme];
  console.log(currentTheme);
  if (isAuth) {
    return (
      <div
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.backgroundColor
        }}
      >
        <div>Hey Welcome back</div>
        <div>Would you like to continue with your application</div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please Login to continue</h3>
      </div>
    );
  }
};
export default Body;
