import "./App.css";
// eslint-disable-next-line import/extensions

// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <img alt="logo" className="App-logo" src={logo} />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         rel="noopener noreferrer"
//         target="_blank"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

// export default App;

import { NavLink, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Product from "./components/Product";
import PageNotFound from "./components/PageNotFound";

const App = () => (
    <>
        <div className="flex space-x-2">
            <NavLink exact activeClassName="underline font-bold" to="/">
                Home
            </NavLink>
            <NavLink exact activeClassName="underline font-bold" to="/product">
                Product
            </NavLink>
        </div>
        <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Product} path="/product" />
            <Route component={PageNotFound} path="*" />
        </Switch>
    </>
);

export default App;
