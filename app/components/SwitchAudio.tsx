"use client";

import Switch from "./Switch";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleAudio } from "../redux/slices/time";

export default function SwitchAutoPause() {
  const { audio } = useSelector((state: RootState) => state.time);

  const dispatch = useDispatch();

  function handleSwitch() {
    dispatch(toggleAudio());
  }

  return (
    <Switch
      text="Play Sounds"
      name={audio}
      onChange={handleSwitch}
      check={true}
      id="play-audio"
    />
  );
}
