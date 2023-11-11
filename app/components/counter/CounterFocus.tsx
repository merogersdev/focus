"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { increment, decrement } from "../../redux/slices/time";

import Counter from "./Counter";

export default function CounterFocus() {
  const { focusMinutes } = useSelector((state: RootState) => state.time);

  const dispatch = useDispatch();

  function incrementMinutes() {
    if (focusMinutes === 60) return;
    dispatch(increment("focus"));
  }

  function decrementMinutes() {
    if (focusMinutes === 0) return;
    dispatch(decrement("focus"));
  }

  return (
    <Counter
      currentValue={focusMinutes}
      heading="Focus Minutes"
      mode="focus"
      increment={() => incrementMinutes()}
      decrement={() => decrementMinutes()}
    />
  );
}
