import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.js";
import "./index.css";
import { Provider } from "react-redux";
import store from "./App/Store/Store.js";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
