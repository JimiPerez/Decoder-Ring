// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const actual = polybius("Thinkful");
      const expected = "4432423352125413";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const actual = polybius("ijijijij");
      const expected = "4242424242424242";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces is", () => {
      const actual = polybius("Hello World");
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const actual = polybius("4432423352125413", false);
      const expected = "thi/jnkful";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 for both 'i' and 'j'", () => {
      const actual = polybius("42", false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const actual = polybius("3251131343 2543241341", false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const actual = polybius("44324233521254131", false);

      expect(actual).to.be.false;
    });
  });
});