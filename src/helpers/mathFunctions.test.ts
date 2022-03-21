import { add, mul } from "./mathFunctions";

describe("Math functions tests", () => {
  it("Check add function", () => {
    expect(add(5, 5)).toBe(10);
  });

  it("Check mul function", () => {
    expect(mul(5, 5)).toBe(25);
  });
});
