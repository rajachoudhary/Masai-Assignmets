import "./styles.css";
import ContactUs from "./Components/ContactUs"
import Download from "./Components/Download"
import Help from "./Components/Help"
import Home from "./Components/Home"
import JoinUs from "./Components/JoinUs"
import Login from "./Components/Login"
import Search from "./Components/Search"
import Setting from "./Components/Setting"
export default function App() {
  return (
    <div className="App">
      <ContactUs title={"CONTACT US"} />
      <Download title={"DOWNLOAD"}/>
      <Help title={"HELP"}/>
      <Home title={"HOME"}/>
      <JoinUs title={"JOIN US"}/>
      <Login title={"LOGIN"}/>
      <Search title={"SERACH"}/>
      <Setting title={"SETTING"}/>
    </div>
  );
}
