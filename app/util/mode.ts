export default function modeColor(mode: string) {
  let color = null;
  switch (mode) {
    case "focus":
      color = "stroke-red-400";
      break;
    case "short":
      color = "stroke-green-400";
      break;
    case "long":
      color = "stroke-blue-400";
      break;
    default:
      color = "stroke-red-400";
  }
  return color;
}

export function nextMode(
  mode: string,
  focusSession: number,
  totalSessions: number
) {
  let next = null;
  switch (mode) {
    case "focus":
      next = focusSession === totalSessions ? "long" : "short";
      break;
    case "short":
      next = "focus";
      break;
    case "long":
      next = "focus";
      break;
    default:
      next = "short";
  }
  return next;
}

export function formatMode(mode: string) {
  switch (mode) {
    case "focus":
      return "Focus:";
    case "short":
      return "Break:";
    case "long":
      return "Break:";
    default:
      return mode;
  }
}
