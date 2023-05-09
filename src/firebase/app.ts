// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbMDJRCQ1vOZUxPBnALpklKTDt93H83o",
  authDomain: "controldegastos-318e9.firebaseapp.com",
  projectId: "controldegastos-318e9",
  storageBucket: "controldegastos-318e9.appspot.com",
  messagingSenderId: "962346128320",
  appId: "1:962346128320:web:7ecd87a836bcacb8192e25",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseGoogleAuth = new GoogleAuthProvider();
export const FirebaseDB = getFirestore(FirebaseApp);
export const FireStorage = getStorage(FirebaseApp);
