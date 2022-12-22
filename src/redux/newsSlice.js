import { HOME_URL } from "data/admin";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchNews = createAsyncThunk("news/fetchNews", async function (url) {
  const responce = await fetch(`${HOME_URL}${url}`);
  const data = await responce.json();
  return data;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.news = action.payload;
    },
    [fetchNews.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default newsSlice.reducer;
