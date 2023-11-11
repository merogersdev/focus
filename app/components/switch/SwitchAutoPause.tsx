"use client";

import Switch from "./Switch";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleAutoPause } from "../../redux/slices/time";

export default function SwitchAutoPause() {
  const { autoPause } = useSelector((state: RootState) => state.time);

  const dispatch = useDispatch();

  function handleSwitch() {
    dispatch(toggleAutoPause());
  }

  return (
    <Switch
      text="Auto Pause"
      name={autoPause}
      onChange={handleSwitch}
      check={true}
      id="auto-pause"
    />
  );
}
