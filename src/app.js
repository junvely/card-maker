import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/login/login";
import styles from "./app.css";
import CardMaker from "./components/card-maker/card-maker";

function App({ authService }) {
  const [userData, setUserData] = useState(null);

  const getUserData = (data) => {
    setUserData(data);
  };

  const resetUserData = () => {
    setUserData(null);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (userData) {
      navigate("/card-maker");
    } else {
      navigate("/");
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
        <Route
          path="/card-maker"
          element={
            <CardMaker
              authService={authService}
              userData={userData}
              resetUserData={resetUserData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
