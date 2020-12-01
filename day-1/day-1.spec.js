const { it, expect } = require("@jest/globals");
const assignment = require("./day-1");

describe("day-1", () => {
  const assignmentInput = require("./input.json").input;

  describe("part 1", () => {
    it("should return correct sum for test input", () => {
      const input = [1721, 979, 366, 299, 675, 1456, 304];

      expect(assignment.run(input)).toEqual(514579);
    });

    it("should return correct sum for assignment input", () => {
      expect(assignment.run(assignmentInput)).toEqual(567171);
    });
  });

  describe("part 2", () => {
    it("should return correct sum for test input", () => {
      const input = [1721, 979, 366, 299, 675, 1456, 304];

      expect(assignment.run_part2(input)).toEqual(241861950);
    });

    it("should return correct sum for assignment input", () => {
      expect(assignment.run_part2(assignmentInput)).toEqual(212428694);
    });
  });
});
