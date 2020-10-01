import React, { useContext, useEffect, useState } from "react";
import "./styles/style.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { Route } from "react-router";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path={`/product/:id`} component={ProductDetail} />
      <Route path={`/category`} component={Category} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
