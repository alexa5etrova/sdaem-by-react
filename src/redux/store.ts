import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import messagesReducer from "./messageSlice";
import authReducer from "./authSlice";
import flatsReducer from "./flatsSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    messages: messagesReducer,
    auth: authReducer,
    flats: flatsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
