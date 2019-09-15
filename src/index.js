import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./rematch-store";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
