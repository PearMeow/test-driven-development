import capitalize from "./capitalize.js";
import { test, expect } from "@jest/globals";

test("a to A", () => {
    expect(capitalize("a")).toBe("A");
});

test("b to B", () => {
    expect(capitalize("b")).toBe("B");
});

test("c to C", () => {
    expect(capitalize("c")).toBe("C");
});

test("apple to Apple", () => {
    expect(capitalize("apple")).toBe("Apple");
});

test("Apple to Apple", () => {
    expect(capitalize("Apple")).toBe("Apple");
});
