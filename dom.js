// get element by id

// let button1=document.getElementById("topbutton");
// console.log(button1);


// get element by clss
// let headings =document.getElementsByClassName("heading-cls");
// console.log(headings);

// elements by tags

// let paragraphs=document.getElementsByTagName("p");
// console.log(paragraphs);


// alt of get elements --- it gives only the firest element
// let elements = document.querySelector("p");
// console.log(elements);


// let newEl = document.querySelectorAll("p");
// console.log(newEl);


// let newEl = document.querySelectorAll(".heading-cls");
// console.log(newEl);

// let newEl = document.querySelectorAll("#id");
// console.dir(newEl);
// console.log(newEl);


//  properties

// tagname
// console.log(topbutton.tagname);
// console.log(p.tagname);

// p.innertext --- only gives the inner text of the element
// p.innerhtml --- gives the inner text with its tags names

// let heading = document.querySelector("h1");
// console.log(heading);
// console.log(heading.innerText="newhead");

// textcontent --- shows the hiiden elements in the div

//  questions 

//  chnge "hello js" to from apna college students

// let element = document.querySelector("h2");
// console.log(element);
// console.log(element.innerText);
// console.log(element.innerText="from appna college students");


// problem 2 --- question of 3 divs by changing the inner text of it 

// let box = document.querySelectorAll(".boxes");
// console.log(box);
// box[0].innerText="new box 0";
// box[1].innerText="new box 1";
// box[2].innerText="new box 2";

// ---------part 2------
// attributes --- the editional information present in the nodes like id , class


// let div = document.querySelector("div");
// console.log(div.innerText);

// let id = div.getAttribute("id");
// console.log(id);

// let name2 = div.getAttribute("name");
// console.log(name2);
 
// let newatt = div.setAttribute("id","234"); // change the value od fif from  box to 234 in the inspect view
// console.log(newatt);

// let para = document.querySelector("p2");
// console.log(para);
// console.log(para.innerText);
// console.log(para.getAttribute("class"));

// ------ style attribute-----

// let div= document.getElementById("box");
// let newdiv=console.log(div.style.backgroundColor="pink");
// console.log(newdiv);
// div.style.fontSize="34px";
// div.style.visibility="hidden";


//  ---- new elements insertion ---- 

// create  a new element without using html
let newbut =document.createElement("button");
newbut.innerText="hello sahil";
console.log(newbut);

// wnt to display i ton the screen --- 4 ways


 