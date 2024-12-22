/**
 * List of most famous pollyfills for array methods
 * map,filter,reduce,forEach,
 */

const testArr = [1, 2, 3, 4, 5];

/* map */
// function myMap(callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i]));
//   }
//   return arr;
// }
// Array.prototype.myMap = myMap;
// function double(x) {
//   return x * 2;
// }
// console.log(testArr.myMap(double));

/* filter */
// function myFilter(cb) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       arr.push(this[i]);
//       console.log(this[i]);
//     }
//   }
//   return arr;
// }
// Array.prototype.myFilter = myFilter;

// console.log(testArr.myFilter((x) => x % 2 === 0));

/* reduce */
// function myReduce(cb, intialValue = this[0]) {
//   let result = intialValue;
//   for (let i = 0; i < this.length; i++) {
//     result = cb(result, this[i]);
//   }
//   return result;
// }
// Array.prototype.myReduce = myReduce;
// console.log(testArr.myReduce((acc, cur) => acc * cur));

/* forEach */
// function myForEach(cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i]);
//   }
// }
// Array.prototype.myForEach = myForEach;
// let n = 0;
// console.log(testArr.forEach((x) => (n = x * 3)));
// console.log(n);

/* flat */
// Array.prototype.myFlat = function (depth = 1) {
//   if (!Array.isArray(this)) {
//     throw new Error(`${this}.flat is not a function`);
//   }
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (Array.isArray(this[i]) && depth > 0) {
//       result.push(...this[i].myFlat(depth - 1));
//     } else {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
// const nonFlatArr = [1, [2, [3]]];
// console.log(nonFlatArr.myFlat(77));

/* join */
// Array.prototype.myJoin = function (separator = ",") {
//   let str = "";
//   for (let i = 0; i < this.length; i++) {
//     str += this[i];
//     i < this.length - 1 ? (str += separator) : null;
//   }
//   return str;
// };
// console.log(testArr.myJoin("-"));

/* slice */
/* lots of edge cases see mdn docs */
Array.prototype.mySlice = function (startIndex = 0, endIndex = this.length) {
  // case wehere we do nothing
  if (startIndex > this.length) {
    return;
  }
  // case where we take start index
  if (startIndex < -this.length) {
    startIndex = 0;
  }
  if (endIndex <= startIndex) {
    return;
  }
  if (endIndex > this.length) {
    endIndex = this.length;
  }
  let arr = [];
  for (let i = startIndex; i < endIndex; i++) {
    arr.push(this[i]);
  }
  return arr;
};
console.log(testArr.mySlice(1, -3));
