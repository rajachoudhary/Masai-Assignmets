import { Route, Switch } from "react-router-dom"
import { About } from "../Pages/About"
import { Contact } from "../Pages/Contact"
import { Faq } from "../Pages/Faq"

export const FooterRoute = ()=>{
    return(
        <div >
            <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/faq">
                <Faq/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            </Switch>
        </div>
    )
}