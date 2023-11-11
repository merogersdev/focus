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
  audio: boolean;
}

const initialState: TimeState = {
  isPaused: true,
  autoPause: false,
  currentMode: "focus",
  focusMinutes: 25,
  totalFocusSessions: 4,
  currentFocusSession: 1,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  elapsedSeconds: 0,
  audio: true,
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
        case "total":
          state.totalFocusSessions += 1;
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
          break;
        case "session":
          state.currentFocusSession -= 1;
          break;
        case "total":
          state.totalFocusSessions -= 1;
          break;
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
    toggleAutoPause: (state: TimeState) => {
      state.autoPause = !state.autoPause;
    },
    toggleAudio: (state: TimeState) => {
      state.audio = !state.audio;
    },
    globalReset: () => {
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
  toggleAutoPause,
  toggleAudio,
} = timeSlice.actions;

export default timeSlice.reducer;
