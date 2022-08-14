import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/login";
import styles from "./app.css";
import CardMaker from "./components/business-card-maker/business-card-maker";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route
          path="/business-card-maker"
          element={
            <CardMaker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
