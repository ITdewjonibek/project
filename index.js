import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./App.js";
import Headtwo from "./headtwo.js";
import './All.css'
import './headtwo.css'
import './header.css'
import Main from "./main.js";
import './main.css'
import And from "./and.js"
import './and.css'
import Free from "./free.js"
import './free.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Headtwo/>
    <Main/>
    <And/>
    <Free/>
  </React.StrictMode>
);
