import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import messagesReducer from "./messageSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    messages: messagesReducer,
    auth: authReducer,
  },
});
