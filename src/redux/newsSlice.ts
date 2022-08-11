import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HOME_URL } from "../data/admin";
import { NewsStateModel } from "../interfaces/news.interface";
import { NewsModel } from "./../interfaces/news.interface";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async function (url: string, { rejectWithValue }) {
    try {
      const responce = await axios.get<NewsModel[]>(`${HOME_URL}${url}`);
      return responce.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: NewsStateModel = {
  news: [],
  status: null,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNews.pending.type]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchNews.fulfilled.type]: (state, action: PayloadAction<NewsModel[]>) => {
      state.status = "resolved";
      state.news = action.payload;
    },
    [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default newsSlice.reducer;
