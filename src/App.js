import React, { useContext, useEffect, useState } from "react";
import "./styles/style.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Home from "./components/Homepage/Home";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import { GlobalContext } from "./context/Provider";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import { routes } from "./routes";
import { HeaderProvider } from "./context/HeaderProvider";
import PagenotFound from "./components/PagenotFound";

function App() {
  return (
    <BrowserRouter>
      <HeaderProvider>
        <Header />
        <Navigation />
      </HeaderProvider>
      <Switch>
        {routes.map((route) => {
          const { path, exact, component } = route;
          return <Route exact={exact} path={path} component={component} />;
        })}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
