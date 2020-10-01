import React from "react";

const Home = React.lazy(() => import("./components/Homepage/Home"));
const Cart = React.lazy(() => import("./components/Cart/Cart"));
const ProductDetail = React.lazy(() => import("./components/ProductDetails/ProductDetail"));

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/cart",
    exact: false,
    component: Cart,
  },

  {
    path: "products/GetProductDetails?id=44",
    exact: false,
    component: ProductDetail,
  },
];
