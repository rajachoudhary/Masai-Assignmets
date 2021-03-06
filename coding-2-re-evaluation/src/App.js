


import { useSelector } from "react-redux";
import { Navbar } from "./Navbar/Navbar";
import { Login } from "./Pages/LoginPage";
import { AllRoute } from "./Router/AllRoute";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
    

  return isAuth ? (
    <div className="App">
      <Navbar/>
      <AllRoute/>
    </div>
  ) : (
    <Login/>
  );
}