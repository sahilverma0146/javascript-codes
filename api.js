//  api --- application programming interface

// api works on the request n response and both they are objects

const p = document.querySelector("#para"); 
const URL ="https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL);
console.log(promise);

(async()=>{
    console.log("getting data1.....");
    let response = await fetch(URL);
    console.log(response);  // response is a object
    let data = await response.json();
    p.innerText=data[0].text;

})();

// AJAX--- asynchronous js & xml 
// JSON--- js object notation 
// Json() method --- 