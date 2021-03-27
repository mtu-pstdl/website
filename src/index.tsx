import React from "react";
import ReactDOM from "react-dom";
import "./ui/global.css";
import {App} from "./ui/App";
import {API} from "./data/API";

API.init();

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
