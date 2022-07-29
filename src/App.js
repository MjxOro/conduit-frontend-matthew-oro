import React from "react";
import HomePage from "./components/Homepage/HomePage";
import {Routes, Route} from "react-router-dom";
import AuthenticationPage from "./components/AuthenticationPage"
import { useEffect } from "react";
import { getAuthUser, resetInitial } from './feature/auth/authSlice';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  useEffect(() => {
    if (sessionStorage.getItem("token") && !user) {
      dispatch(getAuthUser());
    }                                                                                                                 
    else if(!sessionStorage.getItem("token") && user){
      dispatch(resetInitial());
    }
  }, [])
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<AuthenticationPage />} />
      <Route path="/signin" element={<AuthenticationPage isSignin />} />
    </Routes>
  );
}

export default App;
