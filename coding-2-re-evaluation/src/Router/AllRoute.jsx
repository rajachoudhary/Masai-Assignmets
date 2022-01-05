import { Router, Switch } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
// import { loginPage } from "../Pages/LoginPage"

import { SearchPage } from "../Pages/SearchPage"

export const AllRoute = ()=>{
    return(
        <div>
            <Switch>
                <Router exact path="/">
                    <HomePage/>
                </Router>
                <Router exact path="/searchPage">
                    <SearchPage/>
                </Router>
                <Router exact path="/login">
                    <LoginPage/>
                </Router>
            </Switch>
        </div>
    )
}