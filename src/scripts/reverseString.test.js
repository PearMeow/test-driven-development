import { test, expect } from "@jest/globals";
import reverseString from "./reverseString.js";

test("a to be a", () => {
    expect(reverseString("a")).toBe("a");
});

test("ab to be ba", () => {
    expect(reverseString("ab")).toBe("ba");
});

test("abc to be cba", () => {
    expect(reverseString("abc")).toBe("cba");
});

test("Split to be tilpS", () => {
    expect(reverseString("Split")).toBe("tilpS");
});
