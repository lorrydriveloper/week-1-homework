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
