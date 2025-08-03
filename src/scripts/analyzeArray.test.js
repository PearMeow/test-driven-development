import analyzeArray from "./analyzeArray.js";
import { test, expect } from "@jest/globals";

test("[1] to have avg, min, max, length equal to 1", () => {
    expect(analyzeArray([1])).toStrictEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1,
    });
});

test("[1, 1] to have avg 1, min 1, max 1, length 2", () => {
    expect(analyzeArray([1, 1])).toStrictEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 2,
    });
});

test("[1, 3] to have avg 1, min 1, max 1, length 2", () => {
    expect(analyzeArray([1, 3])).toStrictEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 2,
    });
});

test("[0, 1, 2] to have avg 1, min 1, max 1, length 2", () => {
    expect(analyzeArray([0, 1, 2])).toStrictEqual({
        average: 1,
        min: 0,
        max: 2,
        length: 3,
    });
});

test("[0, 0, 3] to have avg 1, min 1, max 1, length 2", () => {
    let data = analyzeArray([0, 0, 1]);
    expect(data.average).toBeCloseTo(0.33);
    expect(data.min).toBe(0);
    expect(data.max).toBe(1);
    expect(data.length).toBe(3);
});

test("[] to throw error", () => {
    expect(() => analyzeArray([])).toThrow(Error);
});
