"use client";
import { useTheme } from "next-themes";
import Switch from "./Switch";

export default function SwitchTheme() {
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
    <Switch
      text="Dark Mode"
      name={currentTheme}
      onChange={handleSwitch}
      check="dark"
      id="dark-mode"
    />
  );
}
