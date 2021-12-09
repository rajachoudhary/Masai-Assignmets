import { Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Users from "../Pages/Users";

const AllRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Users">
        <Users />
      </Route>
      <Route path="/About">
        <About />
      </Route>
    </div>
  );
};
export default AllRoutes;
