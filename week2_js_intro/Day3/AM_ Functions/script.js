// * Session 5 Outline

/*
TODO: Function Basics
TODO: Declaring and Invoking Functions
TODO: Parameters and Arguments
*/

/*
! Functions 

* We often need to repeat actions in our code
* Functions are blocks of code that we can reference
* or call at any point in our script

? Think of functions like variables that store
? some form of functionality we can reference

* Example Syntax - Function Expression:

    function functionName() {
        function code that runs when called;
    }
*/

// * Function Declaration:
function greeting() {
    alert("Hello World!");
}

// * Calling (Invoking) a function:
greeting();

/*
? Think of a function as a block of code that we can call whenever needed. 

? This block of code can contain other statements such as conditional checks and/or loops in order to control how our function behaves. 

* User Logged In vs Logged Out Example:
*/
let userOnline = false;

function updateUserStatus() {
    if (userOnline) {
        userOnline = false;
        console.log("User Signed Out");
    } else {
        userOnline = true;
        console.log("User Signed In");
    }
}

updateUserStatus();
updateUserStatus();

/*
! Parameters and Arguments

? When delcaring functions, in our brackets we can set what are known as parameters. 
? Think of parameters as expected data that our function requires in order to operate as expected.

* Personal Greeting Example:
*/



/*
! Parameters

? Notice that if we now call our function on its own we get 'undefined' in place of our parameter:
*/



/*
! Arguments

? This is where arguments come into play.
? An argument is passed to a function when a function is called. An argument supplies the data to the parameter.
*/




/*
! Multiple Parameters / Arguments

? Sometimes functions require more than one piece of data in order to run.

? We can set multiple parameters and pass multiple arguments seperated by a comma 'function(a,b)':

* Add two numbers example:
*/





// * If we dont supply both arguments we get unexpected behaviour:



/*
! Default Parameters

? When declaring our function we can supply default parameters that will be used if the required data is not supplied.
*/


// * Defualt Parameters - No Arguments Passed

// * Default Parameters - One Argument


// * Default Parametes - Both Arguments


/*
! Return

? So far our functions have been calling a console.log() so that we can see our output. 

? Using the 'return' keyword we can return a value from our function in case we wish to do something other than log it to the console. For adding it to an element in our UI.

* Return Sum Example:
*/




// ! If we want to log a returned value we must call the function within a console.log() as the argument.




/*
! Tasks:

? 1: Write a function with parameters of 'firstName' and 'surname'. The function should return a greeting string using the name provided.

? 2: Write a function that takes in a string as an argument and sorts the string into alphabetical order and returns the result.

? 3: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as arguments and compares the supplied pin and requested withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient return a message approving the transaction, if not returning a message decling the transaction.
*/

// Task 1: Personalised Greeting
function personalisedGreeting(firstName, surname) {
    return `Hello ${firstName} ${surname}, welcome back!`;
}



// Task 2:

function sortStringAlphabetically(inputString) {
    return inputString.split('').sort().join('');
}

// Task 3: ATM

function atm(withdrawalAmount, pin) {
    const storedPin = "1234"; // Example stored pin
    const accountBalance = 1000; // Example account balance

    if (pin !== storedPin) {
        return "Incorrect PIN. Transaction declined.";
    } else if (withdrawalAmount > accountBalance) {
        return "Insufficient funds. Transaction declined.";
    } else {
        // update account balance
        accountBalance -= withdrawalAmount;
        return `Transaction approved. You have withdrawn $${withdrawalAmount}.`;
    }
}


// Parameters are set when we declare the function



// Arguments are passed when we call the function to run

