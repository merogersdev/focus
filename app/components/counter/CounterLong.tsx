"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { increment, decrement } from "../../redux/slices/time";

import Counter from "./Counter";

export default function CounterLong() {
  const { longBreakMinutes } = useSelector((state: RootState) => state.time);

  const dispatch = useDispatch();

  function incrementMinutes() {
    if (longBreakMinutes === 60) return;
    dispatch(increment("long"));
  }

  function decrementMinutes() {
    if (longBreakMinutes === 0) return;
    dispatch(decrement("long"));
  }

  return (
    <Counter
      currentValue={longBreakMinutes}
      heading="Long Break Minutes"
      mode="long"
      increment={() => incrementMinutes()}
      decrement={() => decrementMinutes()}
    />
  );
}
