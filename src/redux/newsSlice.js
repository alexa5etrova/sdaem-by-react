import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("news/fetchNews", async function () {
  const responce = await fetch("http://127.0.0.1:3004/news");
  const data = await responce.json();
  return data;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    status: null,
    error: null,
  },
  reducers: {
    // addTodo(state, action) {
    //   state.todos.push({
    //     id: new Date().toISOString(),
    //     text: action.payload.text,
    //     completed: false,
    //   });
    // },
    // toggleComplete(state, action) {
    //   const toggledTodo = state.todos.find(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   toggledTodo.completed = !toggledTodo.completed;
    // },
    // removeTodo(state, action) {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    // },
  },
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.news = action.payload;
    },
    [fetchNews.rejected]: (state, action) => {},
  },
});

export const { addTodo, toggleComplete, removeTodo } = newsSlice.actions;

export default newsSlice.reducer;
