import React from "react";
import ReactDOM from "react-dom";
import "./ui/index.css";
import "./ui/global.css";
import {App} from "./ui/App";
import {Firebase} from "./data/Firebase";


Firebase.init();

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
