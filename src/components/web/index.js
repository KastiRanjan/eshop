import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router";
import getProduct from "../../context/actions/product/getProduct";
import { HeaderProvider } from "../../context/HeaderProvider";
import { GlobalContext } from "../../context/Provider";
import Login from "../auth/Login/Login";
import Signup from "../auth/Signup/Signup";
import Cart from "./Cart/Cart";
import Category from "./Category/Category";
import Checkout from "./Checkout/Checkout";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Product from "./Product/Product";
import ProductDetail from "./ProductDetails/ProductDetail";
import SearchList from "./SearchList/SearchList";

export default function Main() {
  const { productDispatch } = useContext(GlobalContext);
  useEffect(() => {
    getProduct()(productDispatch);
  }, [productDispatch]);

  return (
    <>
      <HeaderProvider>
        <Header />
        <Navigation />
      </HeaderProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/products" component={Product} />
        <Route path="/catalog/:query" component={SearchList} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/:categoryname/:id" component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </>
  );
}
