import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGF1hyHaq6zskXlwe8OTHWxatM3CQyt_8",
  authDomain: "business-card-maker-acad6.firebaseapp.com",
  projectId: "business-card-maker-acad6",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
