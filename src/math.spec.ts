import {
  addition,
  division,
  multiplication,
  subtraction,
  percentage,
} from "math";

describe("math", () => {
  test("addition", () => {
    expect(addition(1, 0.000001)).toBe(1.000001);
  });
  test("division", () => {
    expect(division(5, 0.5)).toBe(10);
  });
  test("multiplication", () => {
    expect(multiplication(5, 0.5)).toBe(2.5);
  });
  test("subtraction", () => {
    expect(subtraction(1, 0.000001)).toBe(0.999999);
  });
  test("percentage", () => {
    expect(percentage(3, 1)).toBe(33.33);
  });
});
