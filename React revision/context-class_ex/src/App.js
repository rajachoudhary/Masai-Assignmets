
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { AboutUs } from './Pages/AboutUs';
import { Users } from './Pages/Users';
import { Login } from './Pages/Login';
import { Contact } from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="aboutUs" element={<AboutUs/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contact" element={<Contact/>}/>  
      </Routes>
    </div>
  );
}

export default App;
