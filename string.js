// console.log("apna college")
// console.log("apna college")
// console.log("apna college")
// console.log("apna college")
// console.log("apna college")
// console.log("apna college")

//  for loop

// let b=5;
// for( let  i=1; i<b; i++){
//     console.log("hello world");
// }


// var  sum=0;
// for( let i=1; i<5; i++){    //i is defined only in the block for let
//     console.log("i :" ,i);
//     sum = sum + i; // sum =0 +1; sum =1;
// }
// console.log(sum);
// console.log("i :" ,i); // it shows i is undefined



// var  sum=1;
// for( var i=1; i<=5; i++){    //i is defined globally only in the block by var
//     sum = sum + i; // sum =0 +1; sum =1;
//     console.log("i :" ,i);
// }
// console.log(sum);
// console.log("i :" ,i); // shows i defined n assign value 6

// infinite loops -- never do in the program . it is a never ending loops hence it takes the whole memory

// while loops 
// var i =2;
// while( i<22){
//     console.log("i:", i);
//     i++;   // muust h updation 
// }

// do-while loops

// let i=1;
// do{
//     console.log("i:",i );
//     i++;
// }while(i<=10);

//  for-of loop --- for-of --- to apply loops in array or strings
//              --- for-in --- used for objects( this loop  return the keys) n arrays

// let strings = "sahil verma";
// let size =0;
// for( let i of strings){
//     console.log("i:", i);
//     size++;

// }
// console.log("string size :", size);


//  for-in loops

// making a object

// let student = {
//     name : "sahil verma", // name  rollno age cgpa are keys
//     roll_no : 4570,
//     age : 22,
//     cgpa :7.2
// };

// for( let key in student){
//     console.log( "keys :",key , 'value ' , student[key] );
// }


//  print even no from 0 to 100

// for( let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
//     // console.log( "numbers : ",i); // to print all numbers 
// }

// strings tpopic --- sequence of ch. strings also behave like the objects(string.length)

// let str = " sahilverma";
// let str2 = ' sahilverma';

// console.log(str);
// console.log(str2);

// console.log(str.length);

// console.log(str[3]); // this gives the ch of that index which is pressnt in the string


//  tempelate literals

// `` -- backticks
// let specialstring = ` myself sahil verma`;
// console.log( specialstring);

// // using type of operator
// let b = 50;
// console.log(typeof b );

// let obj ={
//     item : "pen",
//     cost : 20,

// };                              // ${___} -- string intetrpolation
// let output =`the name of item is ${obj.item} and its cost is ${obj.cost} rupees`;
// console.log(output); 

//   escape ch --- \n -- string k ander next line 
//   tab space --- \t
// console.log("sahil \n verma");
// let str = console.log("sahil \t verma");    //13
// console.log(str.length);       //12



// strings methods  -- - methid means kch kaam karna
// strings are immutable in js means that hey r never chnge


// let str2 ="   sahil       verma    ";
// console.log(str2.trim()); // trim tje last n start gp in string


// let str ="sahil verma";
// // console.log(str.toUpperCase()); // this method do pass by value mean dont change the value of the string
// // console.log(str.toLowerCase());
// let str1="123456789"
// console.log(str1.slice(3,8));
// // console.log(str1.concat(str)); // str + str1 -- give same result -- 123456789sahil verma

// console.log(str.replace("verma"," soni"));
// console.log(str.replaceAll("a","g"));
// console.log(str.charAt(2)); // --- give the ch at that  index

// assignment que
// let userName ="sahilverma";
// console.log( "old user name is ",userName);
// let newUsername = `username should be @${userName}${userName.length}`;
// console.log(newUsername);







