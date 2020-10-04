import React from "react";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Homepage/Home";
import Login from "./components/Login/Login";
import PagenotFound from "./components/PagenotFound";
import Product from "./components/Product/Product";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Signup from "./components/Signup/Signup";

// const Home = React.lazy(() => import("./components/Homepage/Home"));
// const Cart = React.lazy(() => import("./components/Cart/Cart"));
// const ProductDetail = React.lazy(() => import("./components/ProductDetails/ProductDetail"));

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/signup",
    exact: true,
    component: Signup,
  },
  {
    path: "/product/:id",
    exact: false,
    component: ProductDetail,
  },

  {
    path: "/products",
    exact: false,
    component: Product,
  },

  {
    path: "/cart",
    exact: false,
    component: Cart,
  },
  {
    path: "/checkout",
    exact: false,
    component: Checkout,
  },
  {
    path: "*",
    exact: false,
    component: PagenotFound,
  },
];
