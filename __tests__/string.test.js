import { describe, expect, test } from "@jest/globals";
import capitalize from "../app/util/string";


describe("Test capitalize utility function", () => {
  test("Capitalizes first letter", () => {
    expect(capitalize("string")).toBe("String");
  });
});
