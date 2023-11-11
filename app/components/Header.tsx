"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Header() {
  const { currentMode } = useSelector((state: RootState) => state.time);
  return (
    <header>
      <h1 className="text-3xl font-medium mb-4">
        {currentMode === "focus" ? "Focus Time" : "Break Time"}
      </h1>
    </header>
  );
}
