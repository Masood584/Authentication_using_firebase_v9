import React from "react";
import SignUp from "./containers/signUp";
import { Route, Routes } from "react-router-dom";
import Login from "./containers/logIn";
import Home from "./containers/home";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
