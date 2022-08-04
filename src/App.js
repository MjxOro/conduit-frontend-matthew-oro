import React from "react";
import HomePage from "./components/Homepage/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import AuthenticationPage from "./components/AuthenticationPage"
import { useEffect } from "react";
import { getAuthUser, resetInitial } from './feature/auth/authSlice';
import { useDispatch, useSelector } from "react-redux";
import SettingsPage from './components/SettingsPage';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  let location = useLocation();
  useEffect(() => {
    if (sessionStorage.getItem("token") && !user) {
      dispatch(getAuthUser());
    }                                                                                                                 
    else if(!sessionStorage.getItem("token") && user){
      dispatch(resetInitial());
    }
  }, [location])
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<AuthenticationPage />} />
      <Route path="/signin" element={<AuthenticationPage isSignin />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;
