// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyChn4wY5HXeF4fdWgNbWwyVTeOuVoJDvm0",

  authDomain: "controldegastos-6b36b.firebaseapp.com",

  projectId: "controldegastos-6b36b",

  storageBucket: "controldegastos-6b36b.appspot.com",

  messagingSenderId: "478570824273",

  appId: "1:478570824273:web:ee0c97f2f2d00e1e322e70",

  measurementId: "G-HJ3LL0YLMH"

};


// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseStore = getFirestore(FirebaseApp);