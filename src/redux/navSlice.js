import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNav = createAsyncThunk("nav/fetchNav", async function () {
  const responce = await fetch("http://127.0.0.1:3004/nav");
  const data = await responce.json();
  return data;
});

const navSlice = createSlice({
  name: "nav",
  initialState: {
    nav: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchNav.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchNav.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.nav = action.payload;
    },
    [fetchNav.rejected]: (state, action) => {},
  },
});

export const {} = navSlice.actions;

export default navSlice.reducer;
