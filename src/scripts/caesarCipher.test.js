import caesarCipher from "./caesarCipher.js";
import { test, expect } from "@jest/globals";

test("a shift 1 to be b", () => {
    expect(caesarCipher("a", 1)).toBe("b");
});

test("a shift 3 to be d", () => {
    expect(caesarCipher("a", 3)).toBe("d");
});

test("abc shift 3 to be def", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("zzz shift 1 to be aaa", () => {
    expect(caesarCipher("zzz", 1)).toBe("aaa");
});

test("zzz shift 27 to be aaa", () => {
    expect(caesarCipher("zzz", 27)).toBe("aaa");
});

test("zzz shift 5 to be eee", () => {
    expect(caesarCipher("zzz", 5)).toBe("eee");
});

test("ZZZ shift 1 to be AAA", () => {
    expect(caesarCipher("ZZZ", 1)).toBe("AAA");
});

test("Z Z Z shift 1 to be A A A", () => {
    expect(caesarCipher("Z Z Z", 1)).toBe("A A A");
});

test("Z Z Z shift 1 to be A A A", () => {
    expect(caesarCipher("Z z Z", 3)).toBe("C c C");
});
