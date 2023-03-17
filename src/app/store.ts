import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/user.slice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    counter: counterReducer,
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
