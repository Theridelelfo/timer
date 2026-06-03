import { add } from "../src/math.js";

test("add 1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});


test("add with zero", () => {
  expect(add(5, 0)).toBe(5);
});
