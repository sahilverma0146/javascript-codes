// let student =["sahil", "manjeet"];
// let students =[23,45,67,45,34,23];
// console.log(students.length); // length is  a property -- gives only some value
// //                                method is a task which do some work
// console.log(student);
// console.log(typeof students); // object but it dont have keys it hace indexes


// let marks =[23,45,67,89];
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]); // gives undefined
// marks[0]=456;
// console.log(marks);


// loops in  array
// let cities =["sahil ", "vsdrm", "vikas"];
// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// for( let city of cities){
//     console.log(city);
//     console.log(city.toUpperCase());
// }



// question 



// let marksOfStudents = [ 85,97,44,37,76,60];
// let sum =0;
// for( let i=0; i<marksOfStudents.length;i++ ){
//     sum =sum+marksOfStudents[i]; 
// }
// sum = sum/marksOfStudents.length;
// console.log(sum);

// prob 2

// let items =[ 250,645, 300, 900, 50];
// console.log(items);
// for( let i=0;i<items.length;i++){
   
//     let offer = items[i] /10;
//     console.log(offer);

//     items[i]= items[i] - offer;   
  
// }
// console.log( items);

//  ARRAY METHODS --- change array --- not  gives us a new array   ( mrthods name strt with small letter)
//                --- not change array -- but gives a new array push , pop 

// let arr=[3,4,5,6,7,8];
//push() -- add vlue in the end
// arr.push(7);
// console.log(arr.push(5));
// console.log(arr);

//pop()--delete items from the end
// arr.pop(80); // does not depend on the vlues
// arr.pop(8);
// arr.pop();
// console.log(arr);

// to-sting --- not chnge in the orignl vlue
// console.log(arr.toString());

//  concat() --- add 2arrays , gives a new array
// let keys = [ "sahil ", "verma"];
// let newarr =[ "soni"];
// console.log(arr.concat(keys , newarr));

//  unshift() --- add in strting
//  shift() --- delete from starting


//  slice() --- gives the slice of n array --- not cnge in orignl array

// console.log(arr.slice(2,5)); // gioives val from index 2 to 4


//  splice(strt , dlt ,replce ) --- chnge in orignl array 
// console.log(arr);
// arr.splice(2,1,101 ); // stating index ko replace vli value s chnge krdo
// console.log(arr);
// arr.splice(2,0,101);
// console.log(arr);






