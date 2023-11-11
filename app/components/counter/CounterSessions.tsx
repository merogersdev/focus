"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { increment, decrement } from "../../redux/slices/time";

import Counter from "./Counter";

export default function CounterSessions() {
  const { totalFocusSessions } = useSelector((state: RootState) => state.time);

  const dispatch = useDispatch();

  function incrementSessions() {
    if (totalFocusSessions === 10) return;
    dispatch(increment("total"));
  }

  function decrementSessions() {
    if (totalFocusSessions === 0) return;
    dispatch(decrement("total"));
  }

  return (
    <Counter
      currentValue={totalFocusSessions}
      heading="Total Focus Sessions"
      mode="session"
      increment={() => incrementSessions()}
      decrement={() => decrementSessions()}
    />
  );
}
