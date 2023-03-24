import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/user.slice";
import { productReducer } from "../reducers/product.slice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    productState: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
