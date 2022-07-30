import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import { firebaseApp } from "./service/firebase";
import AuthService from "./service/auth_service";

const authService = new AuthService(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} />
    </BrowserRouter>
  </React.StrictMode>
);
