import React from "react";
//REACT ROUTER
import { BrowserRouter, Route, Switch } from "react-router-dom";
//STYLES
import "normalize.css";
import "../assets/styles/App.scss";
//COMPONENTS
import Login from "../containers/Login";
import Layout from "../containers/Layout";
import Home from "../containers/Home";
import Cart from "../containers/Cart";
import Catalog from "../containers/Catalog";
//REDUX
import { Provider } from "react-redux";
import Store from "../redux/store";

function App() {
  const store = Store();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Layout>
            <Route exact path="/categorias" component={Home} />
            <Route exact path="/carrito" component={Cart} />
            <Route exact path="/catalogo" component={Catalog} />
          </Layout>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
