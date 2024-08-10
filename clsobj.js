// objects are those entities which store methods n attributes

// js objects have spcl property called prototype which is basically a kind of object n it created itself inside the object
//  prototype are prewritten 
//  when we create arr indexes --- the array is considered as a obj becuse we dont defined the push(), pop() etc but we use them


// objects
// const student={
//     name :"sahil",        // attribute
//     roll_no : 28822146,   // attribute
//     printMarks :  function  () {  // method
//         console.log("marks", this.roll_no); // this.marks = student.marks
//     },
// };


// const employee ={
//     calTax(){
//         console.log(" tax rate is 10%");
//     },
// };

// const sahil={
//     salary : 50000,
//     calTax(){
//         console.log("the tax rate is 20%");
//     }

// };

//  to use employee object attributes n methods use ---- prototype
// obj2.__proto__ = obj1
// sahil.__proto__ = employee;

//  when the object n the prototype have both same method than when we call that same method then we only use the function which is own bby the object not by the prototype


//  --- clsss --- template to create n object


class factory{
 // constructors invoked itself automatically 
 // one class have only one constructor n we can pass arguments in the constructor
    // constructor() { 
    //     console.log("creating the new object");
    // }


    constructor(brand) { 
        console.log("creating the new object");
        this.Carbrand=brand;
    }


    start(){
        console.log("start");

    }

    stop(){
        console.log("stop");
    }
    setbrand(brand){
        this.brand=brand;
    }
};
// let fortuner = new factory(); // created fortuner obhject
let fortuner = new factory("fortuner"); // constructor  
fortuner.brand="lexus"; // chnhe the methods of objects
// fortuner.setbrand("helux");
// console.log(setbrand())
// fortuner.stop()
//  --- INHERITANCE ---
// Passing prop n methods from parent to child

// keyword extends

// class parent{
//     hello(){
//         console.log("hello");
//     }

// }

// class child extends parent {} // use inheritance 

// let objchild = new child();


// class person{

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("do nothing");
//     }
// }

// //  hence our person clss n enginner clss both have same fxn but priority given to engineer fxn n this is called as the method overridding

// class engineer extends person {  // inherit properties of person to enginner fxn when we calling it by the engineer clss obj
//     work(){
//         console.log("build something");
//     }
// }

// let sahilObj = new engineer();



//  super --- used to call the constructor of its parent clss to access the parent's properties n methods 


// class person{

//     constructor(){
//         console.log(" enter parent  constructor");
//         this.species = "homo-sepiens";
//     }

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class engineer extends person {
//     constructor( branch){
//         console.log(" enter child constructor");
//         super(); // to invoke parent class constructor 
//         this.branch = branch;
//         console.log(" exit child constructor");

//     }
//     work(){
//         super.eat(); // phele parent clss wala eat function print hoga then then next line of child we print
//         console.log(" build projects ");
//     }
// }

// let engObj = new  engineer( " chemical-engineer");



//  practice problem


// class user{
//     // name(){
//     //     console.log("name");
//     // }
    
//     // email(){
//     //     console.log("email-address");
//     // }
//     constructor(name , email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData(){
//         console.log("name :", this.name);
//         console.log("email :", this.email);
        
//     }
// }

// class Admin extends user{
//     constructor(name, email){
//         super(name,email);
     
//     }
// }

// let userObj = new user("sahil" , "abc@gmail.com");
// userObj.name="sahil";
// userObj.email="Sahilverma22146@gmail.com";
// let adminObj = new Admin("admin" , "admin@gmail.com");





