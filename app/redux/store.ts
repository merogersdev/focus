import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./slices/time";

const makeStore = () => {
  return configureStore({
    reducer: {
      time: timeReducer,
    },
    devTools: true,
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
