import React from "react";
import ReactDOM from "react-dom";
import { shim } from 'promise.prototype.finally';
import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.css";

import App from "./components/App";

shim();

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./components/App", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}
