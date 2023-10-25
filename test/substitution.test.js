// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "thinkful";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "message";
      const alphabet = "abcabcabcabcabcabcabcabcyz";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "jrufscpw";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "thinkful";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "jdxgfznc";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "elp xhm xf mbymwwmfj dne";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "y&ii$r&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "you are an excellent spy";

      expect(actual).to.equal(expected);
    });
  });
})