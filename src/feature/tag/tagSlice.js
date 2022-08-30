import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tags: [],
  isLoading: true,
};

export const getTags = createAsyncThunk('tag/getTags', async (thunkAPI) => {
  try{
    const jwt = sessionStorage.getItem("token")
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/tags`,
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

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    resetInitial: (state) =>{
      state.tags = [];
    }
  },
  extraReducers:{
    [getTags.pending]: (state) => {
      state.isLoading = true;
    },
    [getTags.fulfilled]: (state, action) =>{
      state.isLoading = false;
      state.tags = action.payload.tags;
    }, 
    [getTags.rejected]: (state) => {
      state.isLoading = false;
      state.tags = [];
      sessionStorage.removeItem("token")
    }
  }
});

export const {resetInitial} = tagSlice.actions;
export default tagSlice.reducer;
