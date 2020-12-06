const fs = require("fs");
const path = require("path");
const { it, expect } = require("@jest/globals");
const assignment = require("./day-2");

describe("day-2", () => {
  const assignmentInput = fs
    .readFileSync(path.resolve(__dirname, "./input.txt"), "utf-8")
    .toString();

  it("should parse a password string", () => {
    const input = "11-23 a: abcde";

    expect(assignment.parseInput(input)).toEqual({
      min: 11,
      max: 23,
      letter: "a",
      password: "abcde",
    });
  });

  describe("part 1", () => {
    it("should return correct amount for test input", () => {
      const input = "1-3 a: abcde\n" + "1-3 b: cdefg\n" + "2-9 c: ccccccccc";
      expect(assignment.run(input, assignment.checkPassword)).toEqual(2);
    });

    it("should return correct amount for assignment input", () => {
      expect(assignment.run(assignmentInput, assignment.checkPassword)).toEqual(
        536
      );
    });
  });

  describe("part 2", () => {
    it("should return correct amount for test input", () => {
      const input = "1-3 a: abcde\n" + "1-3 b: cdefg\n" + "2-9 c: ccccccccc";
      expect(assignment.run(input, assignment.checkPasswordNew)).toEqual(1);
    });

    it("should return correct amount for assignment input", () => {
      expect(
        assignment.run(assignmentInput, assignment.checkPasswordNew)
      ).toEqual(558);
    });
  });
});
