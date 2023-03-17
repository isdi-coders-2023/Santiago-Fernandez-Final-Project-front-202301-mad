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
  userLoggedToken: "",
  userLogged: {} as UserStructure,
  userLoggedMenuOptions: menuOptions,
  userLoggedInitials: "",
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(userState, action: PayloadAction<UserStructure>) {
      userState.users = [...userState.users, action.payload];
    },
    login(userState, action: PayloadAction<UserStructure>) {
      userState.userLogged = action.payload;
    },
  },
});

export const { register, login } = userSlice.actions;

export const userReducer = userSlice.reducer;
