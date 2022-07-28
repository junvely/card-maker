import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  // login(providerName) {
  //   const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
  //   return firebase.auth().signInWithPopup(authProvider);
  // }
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "GitHub":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider`);
    }
  }
}

export default AuthService;
