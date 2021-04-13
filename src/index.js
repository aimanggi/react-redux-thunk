import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
// import App from "./App";
import AppHooks from "./AppHooks";

ReactDOM.render(
  <Provider store={store}>
    <AppHooks />
    {/* <App /> */}
  </Provider>,
  document.getElementById("root")
);
