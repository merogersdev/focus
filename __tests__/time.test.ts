import { describe, expect, test } from "@jest/globals";

import calcSeconds, { calcTotalSeconds } from "@/app/util/time";

describe("Test Time Utility Functions", () => {
  describe("Calc Total Seconds", () => {
    test("Test Focus Time", () => {
      expect(calcTotalSeconds("focus", 25, 5, 15)).toBe(1500);
    });
    test("Test Short Focus Time", () => {
      expect(calcTotalSeconds("short", 25, 5, 15)).toBe(300);
    });
    test("Test Long Focus Time", () => {
      expect(calcTotalSeconds("long", 25, 5, 15)).toBe(900);
    });
  });
  describe("Calc Seconds", () => {
    test("Test 60 minutes", () => {
      expect(calcSeconds(60)).toBe(3600);
    });
    test("Test 0 minutes", () => {
      expect(calcSeconds(0)).toBe(0);
    });
  });
});
