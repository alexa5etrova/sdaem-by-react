import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HOME_URL } from "../data/admin";
import { FlatModel, FlatsStateModel } from "../interfaces/flat.interface";

export const fetchFlats = createAsyncThunk(
  "flats/fetchFlats",
  async function (url: string, { rejectWithValue }) {
    try {
      const responce = await axios.get<FlatModel[]>(`${HOME_URL}${url}`);
      return responce.data;
    } catch (error: any) {
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
  } as FlatsStateModel,
  reducers: {},
  extraReducers: {
    [fetchFlats.pending.type]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchFlats.fulfilled.type]: (state, action: PayloadAction<FlatModel[]>) => {
      state.status = "resolved";
      state.flats = action.payload;
      state.error = null;
    },
    [fetchFlats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default flatsSlice.reducer;
