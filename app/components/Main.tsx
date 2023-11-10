import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-50">
      {children}
    </main>
  );
}
