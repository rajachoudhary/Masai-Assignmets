import React from "react";
import { Route } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import { Users } from "../Pages/Users";
 export const AllRoute = ()=>{
    return(
        <div>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/Users">
                <Users/>
            </Route>
            <Route exact path="/About">
                <About/>
            </Route>
        </div>
    )
}