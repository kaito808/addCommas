const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
    expect(addCommas(1234)).to.equal("1,234");
    expect(addCommas(1000000)).to.equal("1,000,000");
    expect(addCommas(9876543210)).to.equal("9,876,543,210");
    expect(addCommas(6)).to.equal("6");
    expect(addCommas(-10)).to.equal("-10");
    expect(addCommas(-5678)).to.equal("-5,678");
  });
});
