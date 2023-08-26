import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDAfUWkCFn8BYRleAa4k27S8gdxCyKyleY",
  authDomain: "authentication-with-firbase.firebaseapp.com",
  projectId: "authentication-with-firbase",
  storageBucket: "authentication-with-firbase.appspot.com",
  messagingSenderId: "555652873822",
  appId: "1:555652873822:web:66e87a42b559783da47ecf"
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

const LogOut = () => {
  return signOut(auth);
};

export { SignUpWithEmailAndPassword, LogInWithEmailAndPassword, LogOut };
