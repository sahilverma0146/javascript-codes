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
let buttonBox = document.querySelector(".button-Box");

topName.innerText = localStorage.myName;
// topName.innerText = "Sahil";
topName.innerText = localStorage.getItem('myName');



inputBox.addEventListener('input', (e)=>{
    topName.innerText = e.target.value;
    console.log(e)
})

