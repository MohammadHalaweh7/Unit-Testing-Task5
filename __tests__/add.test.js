const { add, addMultiple } = require("../add");

describe("Check the sum", () => {
  describe("Check add function", () => {
    test("Return zero if didn't input anything", () => {
      expect(add()).toBe(0);
    });

    test("Return zero for an empty string", () => {
      expect(add("")).toBe(0);
    });

    test("Return the number", () => {
      expect(add("10")).toBe(10);
    });

    test("Return the sum of two numbers", () => {
      expect(add("10+20")).toBe(30);
    });

    test("Return the sum of any number", () => {
      expect(add("10+20+30")).toBe(60);
    });

    test("Return Error if negative numbers are passed", () => {
      expect(() => add("-1")).toThrow("Negatives are not allowed: (-1)");
    });
    test("Return Error if negative numbers are passed", () => {
      expect(() => add("1+-1+3+-9")).toThrow(
        "Negatives are not allowed: (-1 | -9)"
      );
    });

    test("ignore numbers > 1000", () => {
      expect(add("7+2000+1500+3")).toBe(10);
    });
  });

  describe("Check addMultiple function", () => {
    test("Return zero for an empty string", () => {
      expect(addMultiple("")).toBe(0);
    });

    test("Return the number", () => {
      expect(addMultiple("10")).toBe(10);
    });

    test("Return the sum of two numbers", () => {
      expect(addMultiple("10+20")).toBe(30);
    });

    test("Return error more than 2 numbers", () => {
      expect(() => addMultiple("10+20+30")).toThrow(
        "Support up to 2 numbers only"
      );
    });

    test("Return Error if negative numbers are passed", () => {
      expect(() => addMultiple("-1")).toThrow(
        "Negatives are not allowed: (-1)"
      );
    });

    test("ignore numbers > 1000", () => {
      expect(addMultiple("7+2000+1500+3")).toBe(10);
    });
  });
});
