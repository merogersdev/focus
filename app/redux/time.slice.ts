import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TimeState {
  seconds: number;
}

const initialState: TimeState = {
  seconds: 60,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    increment: (state) => {
      state.seconds += 1;
    },
    decrement: (state) => {
      state.seconds -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.seconds += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = timeSlice.actions;

export default timeSlice.reducer;
