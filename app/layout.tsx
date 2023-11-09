import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitch";
import Theme from "./components/Theme";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StateProvider } from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus App",
  description: "Custom Pomodoro timer created with Next.js",
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
          {/* <Theme>
            <ThemeSwitcher /> */}
          {children}
          {/* </Theme> */}
        </StateProvider>
      </body>
    </html>
  );
}
