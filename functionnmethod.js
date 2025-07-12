// // function def
// function students(){  // parameter --- input --- local variables
//     for(let i=0; i<5; i++ ){
//         console.log("hello mr sahil ");
//     }
// }
// // function calling / invoking
// students(); // argument

// prob

// function sum(x,y){  // x,y re local variables
//     sum = x+y;
//     console.log(sum);

// }
// sum(3,4);

//   arrow functions  -- concept of modern js

// const result =(x,y)=>{
//     sum =x+y;
//     console.log(sum);

// }
// result(4,5);

// let multipy=(x,y)=>{
//     mul = x*y;
//     console.log(mul);
// }
// multipy(5,4);

// prob --- take string as a input and check how many chr of string are vowels
// var count =0;
// function vowel(string){
//     for(let chr of string){
//         console.log(chr);
//         if(chr ==="a" ||chr ==="e" ||chr ==="i" ||chr ==="o" ||chr ==="u"  ){
//             count++;
//         }

//     }
//     console.log(count);

// }
// vowel("aeiou");

// for each loop in arrays  --- method  are basically the  --- only  for arr
//   array_name.(callback fxn) --- callback functtion a function which is passed as a arrgument in another function


// higher order function / higher order methods are those who tkes the another  function as a paramter and also those functions which return some function


// function printName(yourName){
//     console.log(yourName)
// }

// function anotherFunction(fn){
//   const name = "SAHIL";
//   fn(name)

// }
// anotherFunction(printName)


// both case takes the function as an argumnet and return a function 
// function printName(){
//     let yourName = "Sahil"
//     console.log(yourName)
// }

// function anotherFunction(fn){
//   const name = "verma";
//   return function (_name , fu){
//    fn() + name
//   }

// }

// const ReturnedFunction = anotherFunction(printName);
// ReturnedFunction();


/*

These are array methods that accept a function:

map()

filter()

reduce()

forEach()

find()

sort()
*/


//  2. Does Not Return a Value
// forEach() always returns undefined.

// const result = [1, 2, 3].forEach(x => x * 2);
// console.log(result); // undefined ❌


// let arr = [2, 3, 4, 5, 6];

// arr.forEach((val, index, arr) => {
//   console.log(val, index, arr);
// });

// prob --- for a each given array of numbers , print the squqre of each value using the foreach loop

// see the return error of forEach
// let arr=[1,2,3,4,5,6];
// arr.forEach((square)=>{
//     // let double=console.log(square);
//     double = square*square;
//     console.log(double);

// });

// let arr1=[1,2,3,4,5,6];

// let double=(square)=>{
//     // let double=console.log(square);
//     double = square*square;
//     console.log(double);

// }
// arr1.forEach(double);

//             array map--- the result stored in the new array

// let num=[1,2,3,4,5];
// num.map((val)=>{
//     console.log(val);
// });

// let num1=[1,2,3,4,5];
// let newarr=num1.map((val)=>{
//     return val*2;
// });
// console.log(num1); // new arr formed
// console.log(newarr);

//  filter
// let arr= [1,2,3,4,5,6,7,8,9,10];
// let newarr =arr.filter((val)=>{
//     return (val %2 == 0);
// });
// console.log(arr);
// console.log(newarr);

// reduce --- reduce the arry into a single value

// let arr=[1,2,3,4];

// let new_arr=arr.reduce((res , current)=>{
//     return (res+ current);

// });
// console.log(new_arr);
// console.log("hello world");


// In JavaScript, functions are first-class objects, meaning they can be used as values just like numbers, strings, and arrays.
//    n the variable in which the function store to use tht function value we hve to write the variavle as a calling function to use that function value

// function createHelloWorld(){
//     return newFun=()=>{
//         return "helo ...";
//     }
// };

// // // console.log(createHelloWorld); // print the return function
// let print=createHelloWorld();
// console.log(print()); // print the result of the return function

// An explicit return is a function where the return keyword is used in its body. (use arrow function with this --> { return ....})
// implicit return which means that you don’t need to use the keyword return to return a value. (use arrow function with ->> ())

// what ()=>{} solve

// Normal function	this depends on how the function is called
// In JavaScript, this usually refers to the object that is calling the function.

// const obj = {
//     name: "Alice",
//     greet: function() {
//         console.log(this.name); // "Alice"

//         function inner() {
//             console.log(this.name); // ❌ undefined (or window.name if not strict mode)
//         }

//         inner();
//     }
// };
// obj.greet();

// above problrm solve by
// const obj = {
//     name: "Alice",
//     greet: function() {
//         const self = this;  // save this

//         function inner() {
//             console.log(self.name); // ✅ "Alice"
//         }

//         inner();
//     }
// };

// obj.greet();

// Arrow function	this is lexically inherited from surrounding
// Arrow functions do not create their own this.
// They capture the this from the surrounding context.

// const obj = {
//     name: "Alice",
//     greet: function() {
//         const inner = () => {
//             console.log(this.name); // ✅ "Alice"
//         };

//         inner();
//     }
// };

// obj.greet();

// function composition process of combining two or more functions such that the output of one function becomes the input of the next.

const fxn1 = x => x +1;
const fxn2 = y => y+2;

console.log(fxn1(fxn2(2)))

// Composing Functions -- compose() function that applies functions from right to left:

// const compose = (f, g) => x => f(g(x)); // HOF --> return a function on call

// const fxn1 = x => x +1;
// const fxn2 = y => y+2;

// const getFun = compose(fxn1 , fxn2)
// console.log(getFun(3))

// returning composed functions ---> To return a composed function from an array of functions in JavaScript

// const f1 = (x) => x + 1;
// const f2 = (x) => x + 2;
// const f3 = (x) => x + 3;

// const composedFunction = compose([f1, f2, f3]); // f(g(h(x)) this will reurn in composed function
// console.log(composedFunction(2));

// function argumensts

function myRegularFunction() {
  //not taking any args so a,b are ignored
  const myArrowFunction = (...args) => {
    console.log(args); //[ 'c', 'd' ]
  };

  myArrowFunction("c", "d");
}

myRegularFunction("a", "b");

function myFunction() {
  console.log(arguments); //[Arguments] { '0': 'a', '1': 'b' }
}

myFunction("a", "b");

// arguments --> arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 2, 3);

//  arrow functionns have dont their own arguments so they inherit fom the outer functions
function myRegularFunction() {
  const myArrowFunction = () => {
    console.log(arguments[0]); // a
    console.log(arguments); //[Arguments] { '0': 'a', '1': 'b' }
  };

  myArrowFunction("c", "d");
}

myRegularFunction("a", "b"); //

// but if want to use own args use rest operator
function myRegularFunction() {
  const myArrowFunction = (...args) => {
    console.log(args); //[ 'c', 'd' ]
  };

  myArrowFunction("c", "d");
}

myRegularFunction("a", "b"); // logs ['c', 'd']

// once ggo https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
