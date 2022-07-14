import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async function (message) {
    const responce = await fetch("http://127.0.0.1:3004/messages", {
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
    const data = await responce.json();
    return data;
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [sendMessage.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [sendMessage.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.nav = action.payload;
    },
    [sendMessage.rejected]: (state, action) => {},
  },
});

export const {} = messagesSlice.actions;

export default messagesSlice.reducer;
