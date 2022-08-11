import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HOME_URL } from "../data/admin";
import { MessagesStateModel, MessagesModel } from "../interfaces/messages.interface";

export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async function (message: MessagesModel, { rejectWithValue }) {
    try {
      const responce = await axios({
        method: "post",
        url: `${HOME_URL}/messages`,
        data: {
          message: message.message,
          name: message.name,
          email: message.email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      return responce.data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    status: null,
    error: null,
  } as MessagesStateModel,

  reducers: {},
  extraReducers: {
    [sendMessage.pending.type]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [sendMessage.fulfilled.type]: (state) => {
      state.status = "resolved";
      state.error = null;
    },
    [sendMessage.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default messagesSlice.reducer;
