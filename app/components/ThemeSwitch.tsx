"use client";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme ? resolvedTheme : "light";

  function handleSwitch() {
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="flex items-center">
      <span>Dark Mode</span>
      <label
        htmlFor="dark-mode"
        className="bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full mx-4"
      >
        <input
          type="checkbox"
          id="dark-mode"
          name="dark-mode"
          className="sr-only peer"
          checked={currentTheme === "dark"}
          onChange={() => handleSwitch()}
        />
        <span className="w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11"></span>
      </label>
      <span>{currentTheme === "dark" ? "On" : "Off"}</span>
    </div>
  );
}
