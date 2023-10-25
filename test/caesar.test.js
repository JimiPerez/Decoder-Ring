// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests", () => {
  
  describe("error handling", () => {
    
    it("should return false if the shift amount is 0", () => {
      const result = caesar("Thinkful", 0)
      expect(result).to.be.false;
    });
    
    it("should return false if the shift amount is above 25", () => {
      const result = caesar("Thinkful", 100)
      expect(result).to.be.false;
    });
    
    it("should return false if the shift amount is under -25", () => {
      const result = caesar("Thinkful", -100);
      expect(result).to.be.false;
    });
  });
  
  describe("encoding a message", () => {
    
    it("should encode a message by shifting the letters", () => {
      const expected = "bcdefg";
      const actual = caesar("abcdef", 1, true);
      expect(actual).to.equal(expected);
    });
    
    it("should leave spaces and other symbols as is", () => {
      const expected = " !@#$%^&*";
      const actual = caesar(" !@#$%^&*", 10, true);
      expect(actual).to.equal(expected);
    });
    
    it("should ignore capital letters", () => {
      const expected = "wklqnixo";
      const actual = caesar("ThInKfUl", 3, true);
      expect(actual).to.equal(expected);
    });
    
    it("should appropriately handle letters at the end of the alphabet", () => {
      const expected = "abcdefg";
      const actual = caesar("tuvwxyz", 7, true);
      expect(actual).to.equal(expected);
    });
    
    it("should allow for a negative shift that will shift to the left", () => {
      const expected = "abcdefg";
      const actual = caesar("bcdefgh", -1, true);
      expect(actual).to.equal(expected);
    });
  });
  
  describe("decoding a message", () => {
    
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const expected = "thinkful";
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
    });
    
    it("should leaves spaces and other symbols as is", () => {
      const expected = " !@#$%^&*";
      const actual = caesar(" !@#$%^&*", 3, false);
      expect(actual).to.equal(expected);
    });
    
    it("should ignore capital letters", () => {
      const expected = "thinkful";
      const actual = caesar("WKLQNIXO", 3, false);
      expect(actual).to.equal(expected);
    });
    
    it("should appropriately handle letters at the end of the alphabet", () => {
      const expected = "xyz";
      const actual = caesar("abc", 3, false);
      expect(actual).to.equal(expected);
    });
    
    it("should allow for a negative shift that will shift to the right", () => {
      const expected = "xyz";
      const actual = caesar("abc", -23, false);
      expect(actual).to.equal(expected);
    });
  });
});










