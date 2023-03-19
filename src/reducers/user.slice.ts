import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { menuOptions, MenuStructure } from "../models/menu.model";
import { UserStructure } from "../models/user.model";

export type UserStateStructure = {
  userLoggedToken: string;
  userLogged: UserStructure;
  userLoggedMenuOptions: Partial<MenuStructure>[];
  userLoggedInitials: string;
  users: UserStructure[];
};

const initialState: UserStateStructure = {
  userLoggedToken: "Sin Token",
  userLogged: {} as UserStructure,
  userLoggedMenuOptions: menuOptions,
  userLoggedInitials: "",
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginToken(state: UserStateStructure, action: PayloadAction<string>) {
      state.userLoggedToken = action.payload;
    },
    loginUser(state: UserStateStructure, action: PayloadAction<UserStructure>) {
      state.userLogged = action.payload;
    },
  },
});

export const { loginToken, loginUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
