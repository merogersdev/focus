"use client";

import { MouseEventHandler } from "react";
import { H2 } from "../Typography";

type CounterProps = {
  increment: MouseEventHandler<HTMLButtonElement>;
  decrement: MouseEventHandler<HTMLButtonElement>;
  currentValue: number;
  mode: string;
  heading: string;
};

export default function Counter({
  increment,
  decrement,
  currentValue,
  mode,
  heading,
}: CounterProps) {
  function getCounterColor(mode: string) {
    switch (mode) {
      case "focus":
        return "bg-red-400";
      case "short":
        return "bg-green-400";
      case "long":
        return "bg-blue-400";
      case "session":
        return "bg-slate-600";
      default:
        return "";
    }
  }
  return (
    <div className="flex flex-col my-8">
      <H2>{heading}</H2>
      <div className="flex justify-between items-center my-4">
        <button
          className="flex items-center leading-8 px-4 justify-center text-3xl font-medium text-slate-700 dark:text-slate-50"
          onClick={decrement}
        >
          -
        </button>
        <div
          className={`flex items-center justify-center ${getCounterColor(
            mode
          )} rounded-full w-16 h-16 text-3xl text-white font-medium mx-6`}
        >
          {currentValue}
        </div>
        <button
          className="flex items-center leading-8 px-4 justify-center text-3xl font-medium text-slate-700 dark:text-slate-50"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
