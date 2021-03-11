import React from "react";
import ReactDOM from "react-dom";
import "./ui/index.css";
import "./ui/global.css";
import {Firebase} from "./data/Firebase";

Firebase.init();

ReactDOM.render(
  <React.StrictMode>
      <p>Hello, world!</p>
  </React.StrictMode>,
  document.getElementById('root')
);
