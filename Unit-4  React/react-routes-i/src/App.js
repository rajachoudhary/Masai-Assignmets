import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Navbar/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
    </div>
  );
}
