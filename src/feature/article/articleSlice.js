import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: null,
  filteredArticles: null,
  tabName: null,
  tabChoice: 1,
  isLoading: true
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
export const getTagFilterFeed = createAsyncThunk("article/getTagFilterFeed", async (tag,thunkAPI) => {
  try {
    const jwt = sessionStorage.getItem("token");
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/articles?tag=${tag}`,
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
      state.filteredArticles = null;
      state.tabChoice = 1;
      state.tabName = null;
    },
    setTabName: (state,action) => {
      state.tabName = action.payload;
    },
    setTabChoice: (state,action) => {
      state.tabChoice = action.payload;
    }
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
    [getTagFilterFeed.pending]: (state) => {
      state.isLoading = true;
    },
    [getTagFilterFeed.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.filteredArticles = action.payload.articles;
    },
    [getTagFilterFeed.rejected]: (state) => {
      state.isLoading = false;
      state.filteredArticles = null;
      sessionStorage.removeItem("token");
    },
  },
});

export const { resetInitial, setTabName, setTabChoice } = articleSlice.actions;
export default articleSlice.reducer;
