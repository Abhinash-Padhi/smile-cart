import "./App.css";
// eslint-disable-next-line import/extensions


import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { PageNotFound } from "components/commons";
import Cart from "components/Cart";

const App = () => {
    // const [cartItems, setCartItems] = useState([]);
    return (
        <>
            <Switch>
                <Route exact component={Product} path={routes.products.show} />
                <Route exact component={ProductList} path={routes.products.index} />
                <Route exact component={Cart} path={routes.cart} />
                <Redirect exact from={routes.root} to={routes.products.index} />
                <Route component={PageNotFound} path="*" />
            </Switch>
        </>
    );
}

export default App;
