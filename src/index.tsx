import React from "react";
import ReactDOM from "react-dom";
import "./ui/global.css";
import {Firebase} from "./data/Firebase";
import {App} from "./ui/App";

Firebase.init(true);

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
