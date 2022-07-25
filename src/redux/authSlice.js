import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOME_URL } from "./../data/admin";

export const userSignUp = createAsyncThunk(
  "users/userSignUp",
  async function (user, { rejectWithValue }) {
    try {
      const responce = await fetch(`${HOME_URL}/users`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: user.login,
          email: user.email,
          password: user.password,
        }),
      });

      if (!responce.ok) {
        let error = await responce.json();
        throw new Error(error);
      }

      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "users/userSignIn",
  async function (user, { rejectWithValue }) {
    try {
      const responce = await fetch(`${HOME_URL}/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          rememberMe: user.rememberMe,
        }),
      });

      if (!responce.ok) {
        let error = await responce.json();
        throw new Error(error);
      }

      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    status: null,
    error: null,
    isAuth: false,
    accessToken: "",
  },
  reducers: {},
  extraReducers: {
    [userSignUp.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [userSignUp.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.accessToken = action.payload;
    },
    [userSignUp.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [userSignIn.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [userSignIn.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.accessToken = action.payload;
    },
    [userSignIn.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

// export const {} = messagesSlice.actions;

export default authSlice.reducer;
