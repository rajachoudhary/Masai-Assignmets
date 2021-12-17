import { Children } from "../Pages/Children"
import { Route, Switch } from "react-router-dom"
import { Electronics } from "../Pages/Electronics"
import { Learn } from "../Pages/Learn"
import { Login } from "../Pages/Login"
import { Mens } from "../Pages/Mens"
import { Pricing } from "../Pages/Pricing"
import { Women } from "../Pages/Womens"
import { MenProductDeatils } from "../Pages/MenProductDetails"

export const AllRoute = ()=>{
    return(
        <div>
            
            <Switch>
                <Route  exact path="/mens">
                    <Mens/>
                </Route>
                <Route exact path="/mens/:id">
                    <MenProductDeatils/>
                </Route>
                <Route exact path="/womens">
                    <Women/>
                </Route>
                <Route exact path="/children">
                    <Children/>
                </Route>
                <Route exact path="/electronics">
                    <Electronics/>
                </Route>
                <Route exact path="/pricing">
                    <Pricing/>
                </Route>
                <Route exact path="/learn">
                    <Learn/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    )
}