import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOME_URL } from "../data/admin";
import { AuthStateModel, UserModel } from "../interfaces/auth.interface";

export const userSignUp = createAsyncThunk(
  "users/userSignUp",
  async function (user: UserModel, { rejectWithValue }) {
    try {
      const responce = await axios({
        method: "post",
        url: `${HOME_URL}/users`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          login: user.login,
          email: user.email,
          password: user.password,
        },
      });
      return responce.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "users/userSignIn",
  async function (user: UserModel, { rejectWithValue }) {
    try {
      const responce = await axios({
        method: "post",
        url: `${HOME_URL}/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: user.email,
          password: user.password,
          rememberMe: user.rememberMe,
        },
      });
      return responce.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
    status: null,
    error: null,
    isAuth: false,
    accessToken: "",
  } as AuthStateModel,
  reducers: {},
  extraReducers: {
    [userSignUp.pending.type]: (state) => {
      state.status = "loading";
      state.error = null;
      state.isAuth = false;
    },
    [userSignUp.fulfilled.type]: (state, action) => {
      state.status = "resolved";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    [userSignUp.rejected.type]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
      state.isAuth = false;
    },
    [userSignIn.pending.type]: (state) => {
      state.status = "loading";
      state.error = null;
      state.isAuth = false;
    },
    [userSignIn.fulfilled.type]: (state, action) => {
      state.status = "resolved";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    [userSignIn.rejected.type]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
      state.isAuth = false;
    },
  },
});

// export const {} = messagesSlice.actions;

export default authSlice.reducer;
