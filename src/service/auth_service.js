import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { firebaseApp } from "./firebase";
import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
  // constructor() {
  //   this.firebaseAuth = getAuth();
  //   this.googleProvider = new GoogleAuthProvider();
  //   this.githubProvider = new GithubAuthProvider();
  // }
  // login(providerName) {
  //   const authProvider = this.getProvider(providerName);
  //   return signInWithPopup(this.firebaseAuth, authProvider);
  // }
  // getProvider(providerName) {
  //   return this.googleProvider;
  // }
}

export default AuthService;
