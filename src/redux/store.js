import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import navReducer from "./navSlice";
import messagesReducer from "./messageSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    nav: navReducer,
    messages: messagesReducer,
    auth: authReducer,
  },
});
