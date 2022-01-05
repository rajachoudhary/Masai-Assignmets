import { Route, Router, Switch } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { SearchPage } from "../Pages/SearchPage"
// import { loginPage } from "../Pages/LoginPage"


export const AllRoute = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/searchPage">
                    <SearchPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
            </Switch>
        </div>
    )
}