import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice"
import profileReducer from "../feature/profile/profileSlice";
import articleReducer from "../feature/article/articleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    articles: articleReducer
  },
});
