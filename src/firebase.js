import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR0OvzL5U-K0vV8zMi1Zc2QyCLyRrvL_c",
  authDomain: "shhhchat-a6d60.firebaseapp.com",
  projectId: "shhhchat-a6d60",
  storageBucket: "shhhchat-a6d60.appspot.com",
  messagingSenderId: "221801014398",
  appId: "1:221801014398:web:47d979fc108bc961fba42f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
