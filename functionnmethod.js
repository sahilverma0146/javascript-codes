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


// for each loop in arrays  --- method  re basically the  --- only  for arr
//   array_name.(callback fxn) --- callback functtion a function which is passed as a arrgument in another function
// higher order function / higher order methods r those who tkes the another  function as a paramter and thoose function which return some function

// let arr= [2,3,4,5,6];

// arr.forEach( (val ,index , arr)=>{
//     console.log(val.toString() , index, arr);
// });


// prob --- for a each given array of numbers , print the squqre of each value using the foreach loop

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

let arr=[1,2,3,4];

let new_arr=arr.reduce((res , current)=>{
    return (res+ current);

});
console.log(new_arr);
// console.log("hello world");


// In JavaScript, functions are first-class objects, meaning they can be used as values just like numbers, strings, and arrays.
//    n the variable in which the function store to use tht function value we hve to write the variavle as a calling function to use that function value 
// function createHelloWorld(){
//     return newFun=()=>{
//         return "helo ...";
//     }
// };

// // // console.log(createHelloWorld);
// let print=createHelloWorld();
// console.log(print());




