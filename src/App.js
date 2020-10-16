import React from "react";
import "./styles/style.scss";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import PagenotFound from "./components/nomatch/PagenotFound";
import Main from "./components/web";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route to="/" component={Main} />
        <Route to="*" component={PagenotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
