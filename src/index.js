import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// importing the provider component to nest app component
import { Provider } from "react-redux";
import store from "../src/store/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Making the store available to the app component and its children
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
