// test here
describe("First exercise Sintax errors", () => {
  describe("addNumbers function should return the sume of the 3 given numbers", () => {
    it("return the correct number", () => {
      expect(addNumbers(1, 2, 3)).to.equal(6);
    });
  });

  describe("introduceMe function should return a string with the interpolation of name and age", () => {
    it("return the correct string", () => {
      expect(introduceMe("Sonjide", 27)).to.equal(
        "Hello, my name is Sonjide and I am 27 years old"
      );
    });
  });

  describe("getReminder function should return a string with the interpolation of the remainder", () => {
    it("return the string with the reminder of the 2 given numbers", () => {
      expect(getRemainder(23, 5)).to.equal("The remainder is 3");
    });
  });
});

describe("Second exercise logic errors", () => {
  describe("trimWord function should return a string without space at the beginning and end", () => {
    it("should return the string cleaned of space string", () => {
      expect(trimWord("  CodeYourFuture ")).to.equal("CodeYourFuture");
    });
  });
  describe("getWordLength function should return the length of the given string", () => {
    it("should return the word length", () => {
      expect(getWordLength("A wild sentence appeared!")).to.equal(25);
    });
  });
  describe("multiply function should return the multiplication of the given 3 numbers", () => {
    it("should return the result of multiply 3 given numbers", () => {
      expect(multiply(2, 3, 6)).to.equal(36);
    });
  });
});

describe("concatenate functions should return the 3 words together and return and string", () => {
  it("should return a well formated string", () => {
    expect(concatenate("code", "your", "future")).to.equal("code your future");
    expect(concatenate("I", "like", "pizza")).to.equal("I like pizza");
    expect(concatenate("I", "am", 13)).to.equal("I am 13");
  });
});
