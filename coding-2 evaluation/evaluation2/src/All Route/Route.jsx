import { Route, Switch } from "react-router-dom"
import { Cart } from "../Pages/Cart/Cart"
import { HomePage } from "../Pages/HomePage"

export const AllRouter = ()=>{
    return(
        <div >
            <Switch>
            <Route  exact path="/"><HomePage/></Route>
            <Route exact path="/cart"><Cart/></Route>
            </Switch>
        </div>
    )
}