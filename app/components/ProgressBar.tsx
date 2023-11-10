"use client";

import { useEffect } from "react";
import modeColor, { nextMode, formatMode } from "../util/mode";
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
import Button from "./Button";
import LinkButton from "./LinkButton";

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
  let notificationSound = new Audio("./sounds/fart.mp3");

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
        // TODO: Replace Sound!!!
        notificationSound.play();
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

  // Display/Update Timer in Document Title
  useEffect(() => {
    document.title = `${formatMode(
      currentMode
    )} ${displayMinutes}:${displaySeconds} `;
  }, [elapsedSeconds]);

  return (
    <>
      <div className="flex relative">
        <div className="flex items-center justify-center absolute w-full h-full text-4xl text-slate-800 dark:text-slate-50 font-semibold">
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
      <div className="flex flex-col">
        <button
          className="flex justify-center mb-16 mt-4"
          onClick={() => dispatch(togglePause())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-slate-700 hover:stroke-slate-500 dark:stroke-slate-50 dark:hover:stroke-slate-300 transition-colors feather feather-play-circle"
          >
            {isPaused ? (
              <>
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </>
            ) : (
              <>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="10" y1="15" x2="10" y2="9"></line>
                <line x1="14" y1="15" x2="14" y2="9"></line>
              </>
            )}
          </svg>
        </button>
      </div>
      <div className="flex w-80 justify-between">
        <Button text="Reset" onClick={() => dispatch(globalReset())} />
        <LinkButton href="/config" text="Config" />
      </div>
    </>
  );
}
