import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/nNotFound";
import { UserDetail } from "../Pages/Userdetails";
import { Users } from "../Pages/Users";
 export const AllRoute = ()=>{
    return(
        <div style={{width:"200px",margin:"auto",padding:"10px"}}>
            <Switch>
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
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    )
}