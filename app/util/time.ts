export default function calcSeconds(seconds: number) {
  return seconds * 60;
}

export function calcTotalSeconds(
  mode: string,
  focus: number,
  short: number,
  long: number
) {
  switch (mode) {
    case "focus":
      return focus * 60;
    case "short":
      return short * 60;
    case "long":
      return long * 60;
    default:
      return 0;
  }
}
