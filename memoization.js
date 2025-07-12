// memoizaton --> optimization tech in which the previous input saved from the input and next time the function
// call with the same input then the result automatically comes from the cache

/**
 * args is an array (because of ...args), and you can't use arrays directly as object keys in JavaScript:
 * Arrays/objects can't be used as keys	They’re reference-based
 * 
 *  What Does "Reference-Based" Mean?
   In JavaScript:

Primitive types like number, string, boolean, null, undefined, and symbol are value-based.

Objects and arrays are reference-based — they are stored in memory by reference, not by value
//  *  reer to one note
//  */
const calc = (a, b) => {
  let sum = a + b;
  return sum;
};

// const val = calc(5)

// console.time();
// console.log(val);
// console.timeEnd()

const memoize = (func) => {
  let cache = {}; // create a object named cache

  return function (...args) {
    const n = JSON.stringify(args);
    console.log("the stringified values of arguments", n);

    if (n in cache) {
      console.log("cache was used");
      return cache[n]; // propery accessing od the  object not the array indexing
    } else {
      console.log("cal 1st time");
      let result = func(...args);
      cache[n] = result;
      return result;
    }
  };
};

// calc is the actuall function
const h = memoize(calc);

// // have to call 2 times the function
console.time();

console.log(h(2, 3)); // Calculates
console.timeEnd();

console.log(" again calling wiht same input");
console.time();
console.log(h(2, 3)); // Uses cache
console.timeEnd();
