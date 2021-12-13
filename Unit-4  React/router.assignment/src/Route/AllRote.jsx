import React from "react";
import { Route } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import { UserDetail } from "../Pages/Userdetails";
import { Users } from "../Pages/Users";
 export const AllRoute = ()=>{
    return(
        <div style={{width:"200px",margin:"auto",padding:"10px"}}>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/users">
                <Users/>
            </Route>
            <Route exact path="/users/:id">
               <UserDetail/>
            </Route>
            <Route exact path="/About">
                <About/>
            </Route>
        </div>
    )
}