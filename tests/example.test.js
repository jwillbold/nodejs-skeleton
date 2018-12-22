require("./test_helper.js")();

describe("mocha test skeleton", function() {
  describe("Chai assert test", function() {
    it("assert test", function() {
      assert('foo' !== 'bar', 'foo is not bar');
    });
  });

  describe("Chai isOk test", function() {
    it("string isOk", function() {
      assert.isOk('everything', 'everything is ok');
    });
  });
});
