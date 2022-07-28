// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./app.css";
import Login from "./components/login/login";
// import CardMaker from "./components/login/card-maker/card-maker";

function App({ authService }) {
  const [userData, setUserData] = useState(null);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/card_maker" element={<CardMaker />} />
        </Routes>
      </BrowserRouter> */}
      <Login authService={authService}></Login>
    </>
  );
}

export default App;
