import logo from './logo.svg';
import {
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import {
  NavBar
} from './components/NavBar';
import {
  AboutUs
} from './pages/About';
import {
  Contact
} from './pages/Contact';
import {
  Users
} from './pages/Users';
import {
  Login
} from './pages/Login';
import {
  Home
} from './pages/Home';
import {
  UserDetails
} from './pages/UserDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/users/:userId" element={<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
