import Calculator from "./calculator.js";
import { test, expect } from "@jest/globals";

let calc = new Calculator();

test("1 + 1 = 2", () => {
    expect(calc.add(1, 1)).toBe(2);
});

test("1 + 3 = 4", () => {
    expect(calc.add(1, 3)).toBe(4);
});

test("0 + 0 = 0", () => {
    expect(calc.add(0, 0)).toBe(0);
});

test("1 - 1 = 0", () => {
    expect(calc.subtract(1, 1)).toBe(0);
});

test("2 - 1 = 1", () => {
    expect(calc.subtract(2, 1)).toBe(1);
});

test("24 - 8 = 16", () => {
    expect(calc.subtract(24, 8)).toBe(16);
});

test("1 * 1 = 1", () => {
    expect(calc.multiply(1, 1)).toBe(1);
});

test("1 * 8 = 8", () => {
    expect(calc.multiply(1, 8)).toBe(8);
});

test("0 * 0 = 0", () => {
    expect(calc.multiply(0, 0)).toBe(0);
});

test("0 / 1 = 1", () => {
    expect(calc.divide(0, 1)).toBe(0);
});

test("0 / 1 = 1", () => {
    expect(calc.divide(0, 1)).toBe(0);
});

test("5 / 1 = 1", () => {
    expect(calc.divide(5, 1)).toBe(5);
});

test("5 / 2 = 1", () => {
    expect(calc.divide(5, 2)).toBeCloseTo(2.5);
});

test("5 / 0 to error", () => {
    expect(() => calc.divide(5, 0)).toThrow(new Error("Error: divide by 0"));
});
