import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: null,
  isLoading: true,
};

export const getFeed = createAsyncThunk("article/getFeed", async (thunkAPI) => {
  try {
    const jwt = sessionStorage.getItem("token");
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/articles`,
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    if (e.response.status === 401) {
      thunkAPI.rejectWithValue("invalid JWT token");
      throw new Error("invalid JWT token");
    }
  }
});

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    resetInitial: (state) => {
      state.articles = null;
    },
  },
  extraReducers: {
    [getFeed.pending]: (state) => {
      state.isLoading = true;
    },
    [getFeed.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload.articles;
    },
    [getFeed.rejected]: (state) => {
      state.isLoading = false;
      state.articles = null;
      sessionStorage.removeItem("token");
    },
  },
});

export const { resetInitial } = articleSlice.actions;
export default articleSlice.reducer;
