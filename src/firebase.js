// import firebase from "firebase";
import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPFwcO5W4cSdCIBU4zYSWd2Hsi52CLNQs",
  authDomain: "recodedfacebook.firebaseapp.com",
  databaseURL: "https://recodedfacebook.firebaseio.com",
  projectId: "recodedfacebook",
  storageBucket: "recodedfacebook.appspot.com",
  messagingSenderId: "792119652578",
  appId: "1:792119652578:web:6f456d9c56b5bf6c876ebb",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider);
// };

export default db;
export default auth;
export default provider
