const { Person } = require("../src/person.js");
let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  " agile",
  " ssd hard drives.",
]);

describe("hello", function () {
  it("Should check the name", function () {
    expect(person.name).toBe("Ryan");
  });
  it("Should test age", function () {
    expect(person.age).toBe(30);
  });
  it("Should test gender", function () {
    expect(person.gender).toBe("male");
  });
  it("Should test interest", function () {
    expect(person.interest).toEqual([
      "being a hardarse",
      " agile",
      " ssd hard drives.",
    ]);
  });

  it("Should test the entire output.", function () {
    expect(person.hello()).toBe(
      "Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives."
    );
  });
});
