// closure --- function ke ander ek aur function

// function outer(num){

//     console.log(num);

//     return num;
// }
// // outer(5); // output--- ony 5  //  not give any value becuse yeh function ko sirf call krega jho yh fxn value  returnkrege usko usee nhi krega

// console.log(outer(5));// output --- 5,5 becuse yeh vho vlue ah rhi h use bhi use kre ga

// function outer(){
//     const name="prtik";
//     function inner(){
//         console.log(name);
//     }
//     inner();
// }

// function outer(){
//     const name="prtik";
//     return function inner(){
//         console.log(name);

//     }

// }

// // outer(); // dont print anything becuse in outer function the inner function is calling and it return some vl which is now uused by the outer function

// const print=outer();  // output--- prtik
// print();

// function add(a){
//     return function  middle(b){
//         return function inner(c){
//             return a+b+c;

//         }
//     }
// }
// let step1 = add(2);  // step1 hve now the complete return function strting from middle
// console.log(step1);
// let step2 = step1(4);
// console.log(step2);
// let step3= step2(5);
// console.log(step3)

//  ES6
// let print = add(2)(3)(4);  // a=2 , b=3 , c=4
// console.log(print);

//   currying

function email(mailId) {
  return function data(subject) {
    return function body(message) {
      return `You Are Sending to  ${mailId} having ${subject} with${message} `;
    };
  };
}

let userName = email("sahilverma22146@gmail.com");
// console.log(userName);

let message = userName("DSA");
let print =message("u re gr8 men");
console.log(print);
// ES6
// const print = email("sahilverma22146@gmail.com")("hello sir")("u  emotions bro@@");
// console.log(print);
