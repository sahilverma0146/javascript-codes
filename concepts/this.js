/*
this is a reference to the object that is currently executing the code
*/

console.log(this); // ✅ Window (in browser), global (in Node.js)

/*
In the global scope, this refers to the global object:

window in browsers

global in Node.js

In non-strict mode, this refers to the global object (window)
In strict mode, this becomes undefined
*/

// const user = {
//   name: "Sahil",
//   greet: function () {
//     console.log(this.name); // ✅ Sahil
//   },
// };

// user.greet(); // this = user

// concept 2
const user = {
  name: "Sahil",
  greet: () => {
    console.log(this.name); // ❌ undefined (or global object's name if defined)
  },
};

user.greet(); //the lexical scope is globsl so it refer the window object
// Arrow functions do not have their own this. 
// They capture this from their surrounding lexical scope (outside the function).

function person(name) {
  this.name = name;
}

const p = person("Sahil");
console.log(p.name); // ✅ Sahil
// When a function is called with new, this refers to the newly created object.