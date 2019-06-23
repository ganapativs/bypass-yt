import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "focus-visible";

let prefersDarkMode =
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  false;

if (prefersDarkMode) {
  import("mini.css/dist/mini-dark.min.css");
} else {
  import("mini.css/dist/mini-nord.min.css");
}

if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
