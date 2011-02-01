describe("Shoes", function() {
  var shoes;
  var app;
  
  beforeEach(function() {
    shoes = new Shoes();
    app = shoes.app();
  });

  it("should return the semantic version number", function() {
    expect(typeof(shoes.version)).toBe("string");
  });
  
  it("should return the current release name", function() {
    expect(typeof(shoes.release)).toBe("string");
  });

});
