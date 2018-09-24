import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
//import $ from "jquery/dist/jquery.min.js";
//import jQuery from 'jquery/dist/jquery.js';
//import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
// import "./js/validate.min.js";
// import "./js/validates-fields.js";
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
