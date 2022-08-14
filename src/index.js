import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import { firebaseApp } from "./service/firebase";
import AuthService from "./service/auth_service";
import CardRepository from "./service/card_repository";
import ImageUploader from "./service/image_uploader";
import ImgFileInput from "./components/img_file_input/img_file_input";

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (
  //  컴포넌트를 props으로 전달할 때 = 대문자로 시작
  props // FileInput컴포넌트에서 props을 전달하여 > imageFileInput에게 props과 ImageUploader 객체생성 props으로 전달
) => <ImgFileInput {...props} imageUploader={imageUploader} />; // FileInput컴포넌트에서 {...props}로 전달하는 이유 > 추후 확장성, 테스트성 등

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        FileInput={FileInput}
        authService={authService}
        cardRepository={cardRepository}
      />
      {/*  props전달 시 컴포넌트를 가장 먼저 전달한다. */}
    </BrowserRouter>
  </React.StrictMode>
);
