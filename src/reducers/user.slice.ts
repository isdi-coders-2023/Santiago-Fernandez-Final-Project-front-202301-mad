import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { menuOptions, MenuOption } from "../components/menu/menu";
import { UserStructure } from "../models/user.model";

export type UserStateStructure = {
  userLoggedToken: string;
  userLogged: UserStructure;
  userLoggedMenuOptions: MenuOption[];
  userLoggedInitials: string;
  usersGallery: UserStructure[];
};

const initialState: UserStateStructure = {
  userLoggedToken: "Sin Token",
  userLogged: {} as UserStructure,
  userLoggedMenuOptions: menuOptions,
  userLoggedInitials: "",
  usersGallery: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginToken(state: UserStateStructure, action: PayloadAction<string>) {
      state.userLoggedToken = action.payload;
    },
    loginUser(state: UserStateStructure, action: PayloadAction<UserStructure>) {
      state.userLogged = action.payload;
    },
    loginGallery(
      state: UserStateStructure,
      action: PayloadAction<UserStructure[]>
    ) {
      state.usersGallery = action.payload;
    },
  },

  // extraReducers(builder) {
  //   builder.addCase(asyncLoadUsers.pending, (state) => {
  //     state.loadingUsersStatus = "loading";
  //   });
  //   builder.addCase(asyncLoadUsers.fulfilled, (state, action) => {
  //     state.users = action.payload;
  //     state.loadingUsersStatus = "idle";
  //   });
  //   builder.addCase(asyncLoadUsers.rejected, (state) => {
  //     state.loadingUsersStatus = "error";
  //   });
  //   builder.addCase(asyncLogin.pending, (state) => {
  //     state.userLoggingStatus = "loading";
  //   });
  //   builder.addCase(asyncLogin.fulfilled, (state, action) => {
  //     state.userLoggingStatus = "idle";
  //     state.userLogged = {
  //       token: action.payload.token,
  //       user: action.payload.user,
  //     };
  //   });
  //   builder.addCase(asyncLogin.rejected, (state) => {
  //     state.userLoggingStatus = "error";
  //     state.userLogged = null;
  //   });
  // },
});

export const { loginToken, loginUser, loginGallery } = userSlice.actions;

export const userReducer = userSlice.reducer;
