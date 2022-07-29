import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuth: false,
  user: null,
  isLoading: true,
};

export const getAuthUser = createAsyncThunk('auth/getAuthUser', async (thunkAPI) => {
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
      thunkAPI.rejectWithValue("invalid JWT token")
      throw new Error("invalid JWT token")
    }
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetInitial: (state) =>{
      state.user = null;
    }
  },
  extraReducers:{
    [getAuthUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getAuthUser.fulfilled]: (state, action) =>{
      state.isLoading = false;
      state.user = action.payload.user;
      state.isAuth = true;
    }, 
    [getAuthUser.rejected]: (state) => {
      state.isLoading = false;
      state.user = null
      state.isAuth = false
      sessionStorage.removeItem("token")
    }
  }
});

export const {resetInitial} = authSlice.actions;
export default authSlice.reducer;
