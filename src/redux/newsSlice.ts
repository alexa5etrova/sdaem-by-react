import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOME_URL } from "../data/admin";
import { NewsStateModel } from "../interfaces/news.interface";

export const fetchNews = createAsyncThunk("news/fetchNews", async function (url: string) {
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
  } as NewsStateModel,
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
