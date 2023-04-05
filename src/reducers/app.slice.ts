import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ErrorLog = {
  date: Date;
  user: string;
  origin: string;
  errorName: string;
  errorStack: string;
  errorMessage: string;
  errorCause: string;
};
export type AppStateStructure = {
  errorLog: ErrorLog[];
};

export const initialState: AppStateStructure = {
  errorLog: [
    {
      date: new Date("2024-01-01T00:00:00"),
      user: "Initial",
      origin: "Initial",
      errorName: "Initial",
      errorStack: "Initial",
      errorMessage: "Initial",
      errorCause: "Initial",
    },
  ],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addErrorLog(state: AppStateStructure, action: PayloadAction<ErrorLog>) {
      state.errorLog.push(action.payload);
    },
  },
});

export const { addErrorLog } = appSlice.actions;

export const appReducer = appSlice.reducer;
