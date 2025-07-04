// memoizaton --> optimization tech in which the previous input saved from the input and next time the function
// call with the same input then the result automatically comes from the cache

const calc=(n)=>{
    let sum =0;

    for( i=0; i<n ;i++){
        sum += i

    }
    return sum;

}

// const val = calc(5)

// console.time();
// console.log(val);
// console.timeEnd()

const memoize = (fun) =>{
    let cache = {};

    return function(...args){
        let n = args[0];
        if( n in cache){
            console.log("cache was used")
            return cache[n]
        }else{
            console.log("cal 1st time")
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }

}

const h = memoize(calc);

// have to call 2 times the function
console.time();
console.log(h(5)); // Calculates
console.timeEnd();

console.time();
console.log(h(5)); // Uses cache
console.timeEnd();
