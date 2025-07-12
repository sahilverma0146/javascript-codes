
//  this function runs when the input change means on every chr it calls
function getData(){
    console.log("hello ji again")
}

// opt way --> when pause writing chr then only the function calls

// DO-SOME-MAGIN only when the time difference between 2 keys press is more than 300 milliseconds

// takes 2 args --> 1.the actual fux to call 2. the delay

const doSomeMagic = function(fn, d) {
    let timer;
    return function(...args) {
        // console.log("start");
        clearTimeout(timer);  // ✅ cancel previous timeout
        timer = setTimeout(() => {
            fn.apply(this, args);  // ✅ call passed function with correct context and args
        }, d);
    };
};

// // Example usage:
// function getData() {
//     console.log("Fetching data...");
// }

const betterFunction = doSomeMagic(getData, 2000);
