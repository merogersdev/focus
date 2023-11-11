"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Spinner from "./Spinner";
import type { ReactNode } from "react";

type ThemeProps = {
  children: ReactNode;
};

export default function Theme({ children }: ThemeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
