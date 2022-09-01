import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  filteredArticles: [],
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
export const setLikePost = createAsyncThunk("article/setLikePost", async (slug, thunkAPI) =>{
  try{
    const jwt = sessionStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/articles/${slug}/favorite`,
      headers: { Authorization: `Bearer ${jwt}`}
    })
    return response.data;
  } catch(e){
    console.log(e);
    if (e.response.status === 401) {
      thunkAPI.rejectWithValue("invalid JWT token");
      throw new Error("invalid JWT token");
    }
  }
})

export const setUnlikePost = createAsyncThunk("article/setUnlikePost", async (slug, thunkAPI) =>{
  try{
    const jwt = sessionStorage.getItem("token");
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/articles/${slug}/favorite`,
      headers: { Authorization: `Bearer ${jwt}`}
    })
    return response.data;
  } catch(e){
    console.log(e);
    if (e.response.status === 401) {
      thunkAPI.rejectWithValue("invalid JWT token");
      throw new Error("invalid JWT token");
    }
  }
})

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    resetInitial: (state) => {
      state.articles = [];
      state.filteredArticles = [];
      state.tabChoice = 1;
      state.tabName = null;
    },
    setTabName: (state,action) => {
      state.tabName = action.payload;
    },
    setTabChoice: (state,action) => {
      state.tabChoice = action.payload;
    },
    setTempLike: (state, action) => {
      state.articles[action.payload].favoritesCount += 1;
      state.articles[action.payload].favorited = true;

    },
    setTempUnlike: (state, action) =>{
      state.articles[action.payload].favoritesCount -= 1;
      state.articles[action.payload].favorited = false;
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
      state.articles = [];
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
      state.filteredArticles = [];
      sessionStorage.removeItem("token");
    },
    [setLikePost.pending]: (state) => {
      state.isLoading = true;
    },
    [setLikePost.fulfilled]: (state, _) => {
      state.isLoading = false;
    },
    [setLikePost.rejected]: (state) => {
      state.isLoading = false;
      sessionStorage.removeItem("token");
    },
    [setUnlikePost.pending]: (state) => {
      state.isLoading = true;
    },
    [setUnlikePost.fulfilled]: (state, _) => {
      state.isLoading = false;
    },
    [setUnlikePost.rejected]: (state) => {
      state.isLoading = false;
      sessionStorage.removeItem("token");
    },
  },
});

export const { resetInitial, setTabName, setTabChoice, setTempLike, setTempUnlike } = articleSlice.actions;
export default articleSlice.reducer;
