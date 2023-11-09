"use client";

import { useEffect } from "react";
import modeColor, { nextMode } from "../util/mode";
import { calcTotalSeconds } from "../util/time";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  togglePause,
  increment,
  globalReset,
  resetElapsed,
  setMode,
} from "../redux/slices/time";

export default function ProgressBar() {
  const {
    isPaused,
    autoPause,
    currentMode,
    elapsedSeconds,
    focusMinutes,
    totalFocusSessions,
    currentFocusSession,
    shortBreakMinutes,
    longBreakMinutes,
  } = useSelector((state: RootState) => state.time);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = window.setInterval(() => {
      // Pause
      if (isPaused) return;

      // Next mode
      if (elapsedSeconds === totalSeconds) {
        dispatch(
          setMode(
            nextMode(currentMode, currentFocusSession, totalFocusSessions)
          )
        );
        dispatch(resetElapsed());
        if (autoPause) dispatch(togglePause());
      }

      // Add a focus session
      if (elapsedSeconds === totalSeconds && currentMode !== "focus") {
        dispatch(increment("session"));
      }

      // Reset after long break
      if (elapsedSeconds === totalSeconds && currentMode === "long") {
        dispatch(globalReset());
        return;
      }

      // Tick
      dispatch(increment("elapsed"));
    }, 1000);

    // Cleanup interval
    return () => window.clearInterval(interval);
  }, [elapsedSeconds, dispatch, increment, isPaused, currentMode]);

  // Time
  const circleWidth = 250;
  const totalSeconds = calcTotalSeconds(
    currentMode,
    focusMinutes,
    shortBreakMinutes,
    longBreakMinutes
  );
  const percentage = 100 - Math.floor((elapsedSeconds / totalSeconds) * 100);

  const minutes = Math.floor((totalSeconds - elapsedSeconds) / 60);
  const seconds = (totalSeconds - elapsedSeconds) % 60;

  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  // SVG Circle
  const radius = 100;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <>
      <div className="flex relative">
        <div className="flex items-center justify-center absolute w-full h-full text-4xl text-gray-700 dark:text-white font-semibold">
          {displayMinutes}:{displaySeconds}
        </div>
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth="15px"
            r={radius}
            className="fill-none stroke-gray-200"
          />
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth="15px"
            r={radius}
            className={`fill-none ${modeColor(currentMode)}`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
              transition: "stroke-dashoffset 0.1s linear",
            }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          />
        </svg>
      </div>
      <button
        className="flex px-4 py-2 bg-gray-300 rounded-sm"
        onClick={() => dispatch(togglePause())}
      >
        {isPaused ? "Play" : "Pause"}
      </button>
      <button
        className="flex px-4 py-2 bg-gray-300 rounded-sm"
        onClick={() => dispatch(globalReset())}
      >
        Reset
      </button>
    </>
  );
}
