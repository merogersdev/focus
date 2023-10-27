import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./timeSlice";

export const store = configureStore({
  reducer: {
    time: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
