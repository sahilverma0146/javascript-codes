// CONVERT THE FUNCTION TO A CONSTRUCTOR
/*
1. CAPITAL THE FUNCTION NAME
2. USE THIS KEYWORD INSDIDE THE FUNCTION
3. CALL THE FUNCTION BY ADDING A NEW KEYWORD --> THIS CREATES THE INSTANCE OF THE FUNCTION *** INSTANCE --> IS BASICALLY THE OBJECT OF THAT FUNCTION 
*/


function BankAccount(customerName , balance = 0){
    
    // CALLS THE VARIABLES AS PROPERTIES IN CONSTRUTOR
    this.customerName =  customerName;
    this.accountNumber = Date.now();
    this.balance = +balance;

    // CALLS THE FUNCTIONS AS METHODS IN CONSTRUTOR
    this.deposit = function (amount){
        this.balance = this.balance + amount;

    }

    this.withdraw = (amount)=>{
        this.balance = this.balance - amount;
        // console.log(this) // REFER TO THE ENCLOSEED LEXICAL SCOPE WHERE IT WAS WRITTEN  (*** MEANS THE OBJECT )

    }

}

// THIS IS  A SIMPLE FUNCTION CALL
// BankAccount();

// // ADDING A NEW KEYWORD THIS WILL CREATE THE OBJECT OF  THE CONSTRUCTOR(FUNCTION)

// const rakeshAccount = new BankAccount("ankit");

// // ACCESSING THE PROPERTIES

// rakeshAccount.accountNumber; 
// rakeshAccount.balance;
// rakeshAccount.customerName

// // CHANGING THE PROPERTIES *** NOT RECOMANDEED 
// // rakeshAccount.balance ="10k";

// //  number + number = number *** number(0) + string('100')  = string('0100')

// // CALLING THE METHODS

// rakeshAccount.deposit(1000);
// rakeshAccount.withdraw(500)
// console.log(rakeshAccount);



//  NOW GETTING DATA FROM THE FRONTEND
const handleFoam = document.querySelector('#handleFoam');

const accoutHolderName = document.querySelector('#accoutHolderName');
const balance = document.querySelector('#balance');

const db = [];
handleFoam.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const AccountDetails = new BankAccount(accoutHolderName.value , balance.value)
    db.push(AccountDetails);
    console.log(db)
})


// THIS FOR HANDLE THE BALANCE
const handleBalance = document.querySelector('#handleBalance')
const Deposit = document.querySelector('#Deposit');
const accountNumber = document.querySelector('#accountNumber')

handleBalance.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const updatedBalance = db.find((account)=>account.accountNumber === Number(accountNumber.value));
    updatedBalance.deposit(+Deposit.value);
    console.log(db)
})
