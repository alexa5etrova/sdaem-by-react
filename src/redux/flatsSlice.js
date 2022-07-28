import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOME_URL } from "../data/admin";

export const fetchFlats = createAsyncThunk(
  "flats/fetchFlats",
  async function (url, { rejectWithValue }) {
    try {
      const responce = await fetch(`${HOME_URL}/${url}`);

      if (!responce.ok) {
        let error = await responce.json();
        throw new Error(error);
      }
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const flatsSlice = createSlice({
  name: "flats",
  initialState: {
    flats: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchFlats.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchFlats.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.flats = action.payload;
    },
    [fetchFlats.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default flatsSlice.reducer;
