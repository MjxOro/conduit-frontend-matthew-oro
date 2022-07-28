import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuth: false,
  user: {},
  isLoading: true,
};

export const getAuthUser = createAsyncThunk('auth/getAuthUser', async () => {
  try{
    const jwt = sessionStorage.getItem("token")
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user`,
      headers: { Authorization: `Bearer ${jwt}`} 
    })
    return response.data;
  } catch(e){
    console.log(e)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers:{
    [getAuthUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getAuthUser.fulfilled]: (state, action) =>{
      console.log(action);
      state.isLoading = false;
      state.user = action.payload.user;
    }, 
    [getAuthUser.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default authSlice.reducer;
