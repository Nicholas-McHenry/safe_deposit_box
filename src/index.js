import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { statusValues, statusMessages } from "./constants/generalConstants";

const initialStore = {
  status: statusValues.LOCKED,
  message: statusMessages.READY,
  serialNumber: "4815162342",
  passcode: "6177",
  inputPasscode: null
};

ReactDOM.render(
  <Provider store={createStore(reducers, initialStore)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
