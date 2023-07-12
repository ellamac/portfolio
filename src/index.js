import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { HashRouter as Router } from "react-router-dom";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Main />
  </Router>
);
