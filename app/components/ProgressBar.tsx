"use client";

import { useState, useEffect, useRef } from "react";
import modeColor from "../util/mode";
import calcSeconds from "../util/time";

type ProgressBarProps = {
  focusMinutes: number;
  shortBreak: number;
  longBreak: number;
};

export default function ProgressBar({
  focusMinutes = 45,
  shortBreak = 5,
  longBreak = 15,
}: ProgressBarProps) {
  // State
  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState("focus");
  const [seconds, setSeconds] = useState(focusMinutes * 60);
  const [focusSession, setFocusSession] = useState(1);

  // Refs
  const isPausedRef = useRef(isPaused);
  const secondsRef = useRef(seconds);

  function tick() {
    secondsRef.current--;
    setSeconds(secondsRef.current);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      // TODO: Set next focus/break
      if (secondsRef.current === 0) return;
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Time
  const circleWidth = 250;
  const percentage = Math.floor((seconds / (focusMinutes * 60)) * 100);
  const m = Math.floor(seconds / 60);
  let s = seconds % 60;

  // SVG Circle
  const radius = 100;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <>
      <div className="flex relative">
        <div className="flex items-center justify-center absolute w-full h-full text-4xl text-gray-700 font-semibold">
          {`${m}:${s < 10 ? `0${s}` : s}`}
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
            className={`fill-none ${modeColor(mode)}`}
            style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          />
        </svg>
      </div>
      <button
        className="flex px-4 py-2 bg-gray-300 rounded-sm"
        onClick={() => {
          setIsPaused((prev) => !prev);
          isPausedRef.current = !isPausedRef.current;
        }}
      >
        {isPaused ? "Play" : "Pause"}
      </button>
      <button
        className="flex px-4 py-2 bg-gray-300 rounded-sm"
        onClick={() => {
          setSeconds(focusMinutes * 60);
          secondsRef.current = focusMinutes * 60;
        }}
      >
        Reset
      </button>
    </>
  );
}
