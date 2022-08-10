import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { HOME_URL } from "../data/admin";
import { MessagesStateModel, MessagesModel } from "../interfaces/messages.interface";
import {} from "./../interfaces/messages.interface";

export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async function (message: MessagesModel, { rejectWithValue }) {
    try {
      const responce = await fetch(`${HOME_URL}/messages`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message.message,
          name: message.name,
          email: message.email,
        }),
      });
      if (!responce.ok) {
        throw new Error("Server error!");
      }
      console.log(responce);
      const data = await responce.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
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
    [sendMessage.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [sendMessage.fulfilled]: (state) => {
      state.status = "resolved";
    },
    [sendMessage.rejected]: (state, action: PayloadAction<string>) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

// export const {} = messagesSlice.actions;

export default messagesSlice.reducer;
