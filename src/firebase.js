import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 사용할 라이브러리

const firebaseConfig = {
  apiKey: "AIzaSyDGF1hyHaq6zskXlwe8OTHWxatM3CQyt_8",
  authDomain: "business-card-maker-acad6.firebaseapp.com",
  projectId: "business-card-maker-acad6",
  storageBucket: "business-card-maker-acad6.appspot.com",
  messagingSenderId: "308747630913",
  appId: "1:308747630913:web:be7d06538833f5548109c0",
  measurementId: "G-LJDYP5VZ3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
