import { describe, expect, test } from "@jest/globals";

import modeColor, { nextMode, formatMode } from "@/app/util/mode";

describe("Test Mode Utility Functions", () => {
  describe("Test Mode Color", () => {
    test("Test Focus Color", () => {
      expect(modeColor("focus")).toBe("stroke-red-400");
    });
    test("Test Short Break Color", () => {
      expect(modeColor("short")).toBe("stroke-green-400");
    });
    test("Test Long Break Color", () => {
      expect(modeColor("long")).toBe("stroke-blue-400");
    });
    test("Test Nonsense Color", () => {
      expect(modeColor("wrong")).toBe("stroke-red-400");
    });
  });
  describe("Test Next Mode", () => {
    test("Next Mode: Short Break", () => {
      expect(nextMode("short", 1, 1)).toBe("focus");
    });
    test("Next Mode: Long Break", () => {
      expect(nextMode("long", 4, 4)).toBe("focus");
    });
    test("Next Mode: Focus", () => {
      expect(nextMode("long", 5, 4)).toBe("focus");
    });
  });
  describe("Test Format Mode", () => {
    test("Format Mode: Focus", () => {
      expect(formatMode("focus")).toBe("Focus:");
    });
    test("Format Mode: Short Break", () => {
      expect(formatMode("short")).toBe("Break:");
    });
    test("Format Mode: Focus", () => {
      expect(formatMode("long")).toBe("Break:");
    });
    test("Format Mode: Wrong", () => {
      expect(formatMode("wrong")).toBe("wrong");
    });
  });
});
