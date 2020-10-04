import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HeaderProvider } from "./context/HeaderProvider";

import { GlobalProvider } from "./context/Provider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      {/* <HeaderProvider> */}
      <App />
      {/* </HeaderProvider> */}
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
