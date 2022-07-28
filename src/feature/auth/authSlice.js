import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuth: false,
  user: {},
  isLoading: true,
};

export const getAuthUser = createAsyncThunk('auth/getAuthUser', async ({rejectWithValue}) => {
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
    if(e.response.status === 401){
      rejectWithValue("invalid JWT token")
      throw new Error("invalid JWT token")
    }
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
      state.isAuth = true;
    }, 
    [getAuthUser.rejected]: (state) => {
      state.isLoading = false;
      state.user = {}
      state.isAuth = false
      sessionStorage.removeItem("token")
    }
  }
});

export default authSlice.reducer;
