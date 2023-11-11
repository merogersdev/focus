"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { increment, decrement } from "../../redux/slices/time";

import Counter from "./Counter";

export default function CounterShort() {
  const { shortBreakMinutes } = useSelector((state: RootState) => state.time);

  const dispatch = useDispatch();

  function incrementMinutes() {
    if (shortBreakMinutes === 60) return;
    dispatch(increment("short"));
  }

  function decrementMinutes() {
    if (shortBreakMinutes === 0) return;
    dispatch(decrement("short"));
  }

  return (
    <Counter
      currentValue={shortBreakMinutes}
      heading="Short Break Minutes"
      mode="short"
      increment={() => incrementMinutes()}
      decrement={() => decrementMinutes()}
    />
  );
}
