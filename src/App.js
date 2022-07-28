import React from "react";
import HomePage from "./components/Homepage/HomePage";
import {Routes, Route} from "react-router-dom";
import AuthenticationPage from "./components/AuthenticationPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<AuthenticationPage />} />
      <Route path="/signin" element={<AuthenticationPage isSignin />} />
    </Routes>
  );
}

export default App;
