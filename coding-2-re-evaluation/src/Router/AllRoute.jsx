import { Route,  Switch } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { SearchPage } from "../Pages/SearchPage"



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
                
            </Switch>
        </div>
    )
}