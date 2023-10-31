import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitch";
import Theme from "./components/Theme";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

// import { store } from "./redux/store";
// import { Provider } from "react-redux";

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
        <Theme>
          <ThemeSwitcher />
          {children}
        </Theme>
      </body>
    </html>
  );
}
