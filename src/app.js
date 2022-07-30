import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import CardMaker from "./components/card-maker/card-maker";

function App({ authService }) {
  const onLogout = () => {
    console.log("Logout");
  };

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/card-maker"
            element={<CardMaker onLogout={onLogout} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Login authService={authService}></Login> */}
    </div>
  );
}

export default App;
