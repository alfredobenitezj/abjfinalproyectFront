import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import "./index.css";
import { Provider } from "react-redux";
import { appStore } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={appStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
