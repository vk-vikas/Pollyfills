/**
 * Pollyfill for call, bind, and apply
 */

const person = {
  name: "vikas",
};

function getMeName(age, hometown) {
  console.log(
    "name is: " + this.name + " of age: " + age + " of hometown: " + hometown
  );
}
// console.log(getMeName.bind(person, 25)("patna"));

// call
// Function.prototype.myCall = function (obj = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "its not a function");
//   }
//   obj.fn = this;
//   obj.fn(...args);
// };
// getMeName.call(person, 25, "nbnnb");

// apply
// Function.prototype.myApply = function (context = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error(this + "its not a function");
//   }
//   if (!Array.isArray(args)) {
//     throw new Error("not passed an array");
//   }
//   context.fn = this;
//   context.fn(...args);
// };
// getMeName.myApply(person, [25, "patna"]);

// bind
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "its not a function");
  }

  context.fn = this;
  return function (...additionalArgs) {
    context.fn(...args, ...additionalArgs);
  };
};
getMeName.myBind(person, 25, "udaipur")();
getMeName.myBind(person)(25, "pune");
