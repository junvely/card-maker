import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/login/login";
import styles from "./app.css";
import CardMaker from "./components/card-maker/card-maker";

function App({ authService }) {
  const [userData, setUserData] = useState(0);

  const getUserData = (data) => {
    setUserData(data);
    console.log(data.displayName);
  };
  const onLogout = () => {
    console.log("Logout");
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (userData) {
      navigate("/card-maker");
    }
  }, [userData]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path="/"
          element={
            <Login authService={authService} getUserData={getUserData} />
          }
        />
        <Route path="/card-maker" element={<CardMaker onLogout={onLogout} />} />
      </Routes>
    </div>
  );
}

export default App;
