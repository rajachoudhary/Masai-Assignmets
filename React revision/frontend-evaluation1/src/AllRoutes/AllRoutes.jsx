import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { NotFound } from "../components/Pages/NotFound";
import { RegOne } from "../components/Pages/RegOne";
import { RegTwo } from "../components/Pages/RegTwo";
import { Users } from "../components/Pages/Users";



export const  AllRoutes = () => {
  const navigate = useNavigate()
  const location = useLocation()
 
  useEffect(()=>{
    if(location.pathname === "/"){
      navigate("/one")
    }

  },[])
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<RegOne/>}/>

       <Route path="/one" element={<RegOne/>}/>
       <Route path="/two" element={<RegTwo/>}/>
       <Route path="/users" element={<Users/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

