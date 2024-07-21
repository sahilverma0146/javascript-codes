// event --- chnge  int he state of n object


//  by this method we can  print  only one handler of the event for the one node

//  let btn1 = document.querySelector("#btn1");
// btn1.onclick =()=>{
//     console.log(" button was clicked");
//    let a=25;
//     a++;
//     console.log(a);// a=26
// }

// priority js handling > inlijne handling 
// event oject --- object which has all information about  the event



// getting info by the object name evt
// let btn1 = document.querySelector("#btn1");
// btn1.onclick =(evt)=>{
//     console.log(evt);
//     console.log(evt.type); // what is the event type
//     console.log(evt.target); // tells the id 
//     console.log(evt.clientX , evt.clientY); // where our event is present in the screen
// }


//  event listeners --- 1. inline handling  2. js hnadling

//  by this method we can  print more than one  handler of the event for the one node



// let btn = document.querySelector("#btn1");

// btn.addEventListener("click", ()=>{
//     console.log("button was clickedd--- handler 1");
// });


// let handler2 = (evt)=>{
//     console.log("button was again clickedd --- handler 2");
//     console.log(evt.clientX, evt.clientY);
// }

// btn.addEventListener("click",handler2);

// // removing the handler --- always put that callback function in the another variable n than push that callback function(arrgument) in the event listner 
// btn.removeEventListener("click",handler2);


// problem --- 2  toggle button

// let modebtn = document.querySelector("#mode");

// let curmode = " light";
// modebtn.addEventListener("click" , ()=>{

//     if(curmode==="light"){
//         curmode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
        
//     }else{
//         curmode = "light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(curmode);
// });