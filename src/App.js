import React, { useContext, useEffect } from "react";
import "./styles/style.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { routes } from "./routes";
import { HeaderProvider } from "./context/HeaderProvider";
import { GlobalContext } from "./context/Provider";
import getProduct from "./context/actions/product/getProduct";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { productState, productDispatch } = useContext(GlobalContext);

  const { error } = productState;
  useEffect(() => {
    getProduct()(productDispatch);
  }, [productDispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderProvider>
        <Header />
        <Navigation />
      </HeaderProvider>
      <Switch>
        {routes.map((route, i) => {
          const { path, exact, component } = route;
          return <Route exact={exact} path={path} component={component} key={i} />;
        })}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
