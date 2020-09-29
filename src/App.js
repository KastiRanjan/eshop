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

function App() {
  const { singleProductState } = useContext(GlobalContext);

  const id = singleProductState.singleProduct.id;
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/cart" component={Cart} />
      <Route path={`/product/${id}`} component={ProductDetail} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
