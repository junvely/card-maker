import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import { firebaseApp } from "./service/firebase";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImgFileInput from "./components/img_file_input/img_file_input";

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = (
  // props으로 컴포넌트를 전달할 때 = 대문자로 시작
  props // 컴포넌트 > 다른 컴포넌트에 컴포넌트 자체를 전달
) => <ImgFileInput {...props} imageUploader={imageUploader} />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App FileInput={FileInput} authService={authService} />
      {/*  props전달 시 컴포넌트를 가장 먼저 전달한다. */}
    </BrowserRouter>
  </React.StrictMode>
);
