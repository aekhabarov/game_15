import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserContextProvide from "./contexts/userContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <UserContextProvide>
    <App />
  </UserContextProvide>,
  document.getElementById("root")
);
