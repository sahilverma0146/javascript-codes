let name = {
    firstName : "sahil",
    lastName : "verma",
    printFullName : function (){
        console.log(this.firstName + " " + this.lastName)
    }
}

name.printFullName();

// IF WE CREATE A MUTLI-USE FUNCTION THEN WE DO LIIKE THIS 

let printFullName =  function (hometown , state){
        console.log(this.firstName + " " + this.lastName + " lives in " + hometown  +" , "+  state)
    }

let name2 = {
    firstName : "Sachin",
    lastName : "Tendulkar"
    // HERE IF WE ALSO WANT TO PRINT THE FULL NAME WE HAVE TO COPY THE PRINT METHOD FROM THE ABOVE BUT ISTEAD WE HAVE A METHOD ***call --> HELPS IN FUNCTION BORROWING
    //  CALL WILL TAKE THE FIRST ARGUMENT AAS THE REFERENCE LIKE THIS WILL POINT TO WHICH OBJECT
}
printFullName.call(name2 , "Mumbai" , "Maharashtra") // DOING THIS OUR THIS WILL POINTS TO THE NAME2

// CALL AND APPLY METHODS ARE SAME BUT THE DIFFERENCE IS IN THE ARGUMENTS PASSING

// CALL --> PASSES THE ARGUMENTS DIRECTLY
// APPLY --> ARGUMENTS ARE PASSED AS THE ARRAY OF LISTS
printFullName.apply(name2 , ["Ranchi" , "lusiPur"]);

// BIND --> BIND THE METHOD TO THE OBJECT AND RETURN US THE COPY OF THE METHOD


// THIS CREATES A PRINTFULLNAME METHOD COPY AND BIND TO OBJECT NAME2 AND IT RETURN US A METHOD WHICH IS CALLED LATER
let printMyName = printFullName.bind(name2 , "Mumbai" , "Maharashtra");
console.log(printMyName); //[Function: bound printFullName]
printMyName()
