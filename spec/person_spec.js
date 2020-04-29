const { Person } = require("../src/person.js");

let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  " agile",
  " ssd hard drives.",
]);
let greeting = person.hello();

describe("hello", function () {
  it("Should contain a string value", function () {
    expect(person.hello()).toBe(ExpectedValue());
  });
});

function ExpectedValue() {
  return "Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.";
}
