import { Navbar } from "./AuthContextComponents/Navbar";
import { FetchApi } from "./FakeRestApiComponents/FetchApi";
import { Todo } from "./TodoComponents/Todo";


function App() {
  return (
    <div className="App">
      {/* <FetchApi/> */}
      {/* <Todo/> */}
      <Navbar/>
    </div>
  );
}

export default App;
