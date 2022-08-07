import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/login";
import styles from "./app.css";
import CardMaker from "./components/business-card-maker/business-card-maker";

function App({ authService }) {
  const [userData, setUserData] = useState(null);

  const getUserData = (data) => {
    setUserData(data);
  };

  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path="/"
          element={
            <Login authService={authService} getUserData={getUserData} />
          }
        />
        <Route
          path="/card-maker"
          element={<CardMaker authService={authService} userData={userData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
