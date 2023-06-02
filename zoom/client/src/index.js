import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateVideoContext } from "./components/Context";
import Navbars from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateVideoContext>
    <Navbars />
    <App />
  </StateVideoContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
