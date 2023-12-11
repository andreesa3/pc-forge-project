import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ScrollTop from "./features/ScrollTop.js";
import { Provider } from "react-redux";
import "./index.css";
import Store from "./features/Store.js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollTop>
      {/*per scrollare in alto ad ogni cambio route */}
      <Provider store={Store}>
        <PayPalScriptProvider>
        <App />
        </PayPalScriptProvider>
      </Provider>
    </ScrollTop>
  </BrowserRouter>
);
