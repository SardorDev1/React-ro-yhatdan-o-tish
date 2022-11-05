import * as firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyDSc5bIOJ0mMMTFm-VODBxfuOEHCmG41js",
  authDomain: "authorization-6a96e.firebaseapp.com",
  projectId: "authorization-6a96e",
  storageBucket: "authorization-6a96e.appspot.com",
  messagingSenderId: "855080882869",
  appId: "1:855080882869:web:2e225173f29cd85c07a4fc",
  measurementId: "G-PWWQ56JRWZ"
});
export const auth = firebase.auth();

/**GOOGLE AUTH INTEGRATION CODELARI */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;