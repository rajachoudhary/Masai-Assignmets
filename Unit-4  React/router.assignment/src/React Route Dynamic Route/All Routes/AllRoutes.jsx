import { Route, Switch } from "react-router-dom"
import { ErrorPage } from "../Pages/ErrorPage"
import { ProductDetail } from "../Pages/PoductDetail"
import { ProductHomePage } from "../Pages/ProductHomePage"
import { ProductPage } from "../Pages/ProductPage"

export const ProductRoutes = ()=>{
    return(
        <div style={{width:"300px",margin:"auto",textAlign:"center"}}>
            <Switch>
                <Route exact path= "/">
                    <ProductHomePage/>
                </Route>
                <Route exact path= "/product">
                    <ProductPage/>
                </Route>
                <Route exact path="/product/:id">
                    <ProductDetail/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </div>
    )
}