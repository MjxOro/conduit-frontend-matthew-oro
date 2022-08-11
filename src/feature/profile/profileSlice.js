
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  profile: null,
  isLoading: true,
};

export const getProfile = createAsyncThunk('profile/getProfile', async (username) => {
  try{
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/profiles/${username}`,
    })
    return response.data;
  } catch(e){
    console.log(e)
  }
})

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetInitial: (state) =>{
      state.profile = null;
    }
  },
  extraReducers:{
    [getProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfile.fulfilled]: (state, action) =>{
      state.isLoading = false;
      state.profile = action.payload.profile;
    }, 
    [getProfile.rejected]: (state) =>{
      state.isLoading = false;
    }, 
  }
});

export const {resetInitial} = profileSlice.actions;
export default profileSlice.reducer;
