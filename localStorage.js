// let topName= document.querySelector(".Name");
// let inputBox = document.querySelector("input-box");
// let buttonBox = document.querySelector(".button-box");

// topName.innerText="Sahil";

// buttonBox.addEventListener("click",()=>{
//     console.log("hello")
// }
// );

let topName = document.querySelector(".Name");
let inputBox = document.querySelector(".input-Box");

let ageBox = document.querySelector(".age-Box");
let ageName = document.querySelector(".age");


// topName.innerText = localStorage.getItem("myName");

// ageName.innerText = localStorage.getItem("age");

// inputBox.addEventListener("input", (e) => {
//   localStorage.myName = e.target.value;
//   topName.innerText = localStorage.myName;
// });

// ageBox.addEventListener("input", (e) => {
//   localStorage.age = e.target.value;
//   ageName.innerText = localStorage.age;
// });


const myData =JSON.parse(localStorage.getItem('myData'))  // our object which store in storage as a string now converted to object again n we 
// use the poperties in line 52,53
// myData={
//     name:'',
//     age:'',
// }

inputBox.addEventListener('input' , (e)=>{
    myData.name = e.target.value;
    localStorage.setItem('myData' ,JSON.stringify(myData));
    topName.innerText=e.target.value;
    // topName.innerText=localStorage.getItem(myData); // we cnt get our name in the <h> tag

})

ageBox.addEventListener('input' , (e)=>{
    myData.age = e.target.value;
    localStorage.setItem('myData' ,JSON.stringify(myData));
    ageName.innerText=e.target.value;

})

ageName.innerText =myData.age;
topName.innerText =myData.name;