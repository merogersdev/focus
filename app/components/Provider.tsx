"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import type { ReactNode } from "react";

type StateProviderProps = {
  children: ReactNode;
};

export function StateProvider({ children }: StateProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
