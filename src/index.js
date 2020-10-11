import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

console.log("test trigger jenkins");
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
