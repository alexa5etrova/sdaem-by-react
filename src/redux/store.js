import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import navReducer from "./navSlice";
import messagesReducer from "./messageSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    nav: navReducer,
    messages: messagesReducer,
  },
});
