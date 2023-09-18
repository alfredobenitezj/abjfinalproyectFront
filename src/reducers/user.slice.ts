import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user.model";

export type UserLogged = {
  id: string;
  userName: string;
  email: string;
  token: string;
};
type State = {
  users: User[];
  token?: string;
  currentUser?: UserLogged;
};
const initialState: State = {
  users: [],
  currentUser: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUserLogged: (state, action: PayloadAction<UserLogged>) => {
      console.log("Reducer setUserLogged called with", action.payload);
      state.currentUser = action.payload;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = undefined;
      state.currentUser = undefined;
    },
  },
});
export const { setUserLogged, logout } = userSlice.actions;
export default userSlice.reducer;
