import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjKNGCH_knDVQGeLZzbVjSBWr0MedfutA",
  authDomain: "fir-v9-afed9.firebaseapp.com",
  projectId: "fir-v9-afed9",
  storageBucket: "fir-v9-afed9.appspot.com",
  messagingSenderId: "45929276688",
  appId: "1:45929276688:web:0e38c1fba42268a437b195",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUpWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const LogInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export { SignUpWithEmailAndPassword, LogInWithEmailAndPassword };
