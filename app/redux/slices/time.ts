import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TimeState {
  isPaused: boolean;
  autoPause: boolean;
  currentMode: string;
  focusMinutes: number;
  totalFocusSessions: number;
  currentFocusSession: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
  elapsedSeconds: number;
}

const initialState: TimeState = {
  isPaused: true,
  autoPause: false,
  currentMode: "focus",
  focusMinutes: 1,
  totalFocusSessions: 4,
  currentFocusSession: 1,
  shortBreakMinutes: 1,
  longBreakMinutes: 1,
  elapsedSeconds: 0,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    increment: (state: TimeState, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "focus":
          state.focusMinutes += 1;
          break;
        case "short":
          state.shortBreakMinutes += 1;
          break;
        case "long":
          state.longBreakMinutes += 1;
          break;
        case "elapsed":
          state.elapsedSeconds += 1;
          break;
        case "session":
          state.currentFocusSession += 1;
          break;
        default:
          return state;
      }
    },
    decrement: (state: TimeState, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "focus":
          state.focusMinutes -= 1;
          break;
        case "short":
          state.shortBreakMinutes -= 1;
          break;
        case "long":
          state.longBreakMinutes -= 1;
          break;
        case "elapsed":
          state.elapsedSeconds -= 1;
        default:
          return state;
      }
    },
    resetElapsed: (state: TimeState) => {
      state.elapsedSeconds = 0;
    },
    resetFocusSessions: (state: TimeState) => {
      state.elapsedSeconds = 0;
    },
    togglePause: (state: TimeState) => {
      state.isPaused = !state.isPaused;
    },
    globalReset: (_state: TimeState) => {
      return initialState;
    },
    setMode: (state: TimeState, action: PayloadAction<string>) => {
      state.currentMode = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  togglePause,
  globalReset,
  resetElapsed,
  resetFocusSessions,
  setMode,
} = timeSlice.actions;

export default timeSlice.reducer;