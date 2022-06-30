import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import navReducer from "./navSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    nav: navReducer,
  },
});
