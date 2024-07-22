// async prog --- in this code doesnot run line by line 

// setTimeout(()=>{
//     console.log("hello")
// },4000); // 1sec=1000 millisec

// another syntex

// let hello =function (){
//     console.log("hello");
// }

// setTimeout(hello,2000);


//  Callbacks --- are the functions that passess as n  argument to another function

// function sum(a,b){
//     console.log("sum of (a+b) is  :" , a+b);
// }

// function calculator(a, b , sum){
//     sum(a,b);
// }

// calculator(1,2,sum);


// callback-hell --- nesting of callback 

// function getData(dataId , getNextData){
//     setTimeout( ()=>{
//         console.log("data" , dataId);
//         if(getNextData){  // this case run only when we have the call-back function 
//             getNextData();
//         }
        
//     },2000 );
// }
//  // callback-hell
// getData(1, ()=>{
//     getData(2 , ()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });

// promises solve callback-hell

// 3 states--- 1. pending state
//             2. fillfull state --- resolve()
//             3. rejected state --- rejected()
  

// let promise = new Promise ((resolve, reject) =>{  // RESOLVE --- OUR TASK IS COMPLETED  REJECT --- OUR TASK IS FILLFULL WITH SOME ERRORS
//     console.log("i am a promise");
//     resolve("fillfulled");
//     reject("some error")
// });


// promise --- promise.catch() --- use for rject
//         --- promise.then() --- use for resolve 
// const getPromise =()=>{
//     return new Promise ((resolve, reject) =>{
//         console.log("i am a promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();

// // execute when the promise is fillfulled
// promise.then( (res)=>{  // result --- gives the value we give in the resolve  
//     console.log("promise fillfulled" , res);
// });

// //  execute when the promise is rejected
// promise.catch((err)=>{ // error
//     console.log(" failed" ,err ); // err gives the val we give in the reject
// });





// function getData(dataId , getNextData){
//     return new Promise ((resolve , reject)=>{
//         setTimeout( ()=>{
//             console.log("data" , dataId);
//             resolve("success");
//             if(getNextData){  // this case run only when we have the call-back function 
//                 getNextData();
//             }
            
//         },2000 );

//     });
   
// }

// getData(1);


// function async(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
            
//         }, 2000);

//     });


// }

// console.log("fetching data1........");
// let p1 =async();
// p1.then((res)=>{
//     console.log(res);

// });

// function async1(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
            
//         }, 4000);

//     });


// }

// function async2(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
            
//         }, 4000);

//     });


// }
// console.log("getting data1.....");   // here we are getting data1 n  getting data2 timeout start at same  time
// let p1 = async1();
// p1.then((res)=>{
//     console.log(res)

// });

// console.log("getting data2.....");

// let p2 = async2();
// p2.then((res)=>{
//     console.log(res)

// });


//  now we wnt getting data1 and after data1 then  getting data2 

//  promise chainning
// console.log("getting data1.....");

// let p1 = async1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2......");
//     let p2 = async2();
//     p2.then((res)=>{
//         console.log(res);
//     });

// });


// ---- async await ----

// async function return a promise

// async function hello(){  // this fxn automatically return us the promise
//     console.log("hello");
// }

//  await --- pause the execution untill the promise is not settled


function api(){
    return  new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("check whether");
        resolve(200);
        },2000);

    });
};

//   by async wait we hold the execution that we hold by the promise-chainning

// async function getWetherData(){
//     await api(); // 1st call
//     console.log("api(2) is calling now");
//     await api();// 2nd

// }

// better way 
// async await >> promise-chain >> callback-Hell

//  IIFE --- IMMEDIATELY INVOKED FUNCTION EXPRESSION --- USE FOR DIRECT EXECUTION NOT REQ OF FUNCTION CALLBACK
( async function getWetherData(){
    await api(); // 1st call
    console.log("api(2) is calling now");
    await api();// 2nd
})();