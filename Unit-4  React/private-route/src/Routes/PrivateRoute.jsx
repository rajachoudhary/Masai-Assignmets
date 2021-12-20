import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoute = ({ children, exact, path }) => {
  const [isAuth] = useContext(AuthContext);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};
