// * Session 3 Outline

/*
TODO: Comparison Operators
TODO: If / Else
TODO: Logical Operators
TODO: Switch
*/

/*
! Conditional Statements

* In order to evaluate conditions we need comparison operators
* Comparison Operators take the left value and compare it to the right value
* the result will always be a boolean: "true" or "false"

! Comparison Operators

? Equal to (==)
? Equal value and type (===)
? Not Equal (!=)
? Not Equal value or type (!==)
? Greater than (>)
? Less than (<)
? Greater than or Equal to (>=)
? Less than or Equal to (<=)
*/

let num = 100;

// * Equal To == (Checks if equal value)
console.log(num == 100);
console.log(num == "100");

// * Strictly Equal To === (Checks if equal value and equal data type)
console.log(num === 100);
console.log(num === "100");

/*
! If Statement
? Check if a condition is true and if so execute the associated code block
* Weather Example:
*/

// * Delcare "weather" variable to check the value of
let weather = "Sunny";
let user_input=prompt("What is the current weather?");


/*
! If / Else Statement
? Check if a condition is true and if so execute the associated code block
? Else allows us to specify a code block that runs if our condition is false
* Weather Example:
*/
if(weather==user_input){
    console.log("put your glasses on");
}else{
    console.log("you might not need your glasses!")
}



/*
! If / Else If / Else Statement
? Check if a condition is true and if so execute the associated code block
? Else if is added between if and else to add another condition
* Weather Example:
*/

if(weather==user_input){
    console.log("put your glasses on");
}
else if(weather=="Cold"){
    console.log("Put your coat on");
}
else{
    console.log("you might not need your glasses!");
}

/*
! If / Else If / Else Statement
? Check if a condition is true and if so execute the associated code block
? Multiple Else If's can be added into our statement if needed
* Weather Example:
*/




/*
! Logical Operators

? Allow us to check against more than one condition

? and (&&)
? or (||)
? not (!)
*/

/*
! Logical Operators - || (or)
? Allow us to check against more than one condition
* Traffic Light example
*/

// * Delcare "trafficLight" variable to check the value of
let trafficLight = "Green";
if(trafficLight==='red' || trafficLight =='amber'){
    console.log("Stop!")
}else{
    console.log("Go")
}




// ! Refactored simpler version using !(not)


/*
! Logical Operators - && (and)
? Allow us to check against more than one condition
* Number between 5 and 10 example
*/

// * Delcare "number" variable to check the value of
let number = 8;




/*
! Switch Statement 

? Alternate conditional statement used to compare a value against multiple options
? We pass a value to our switch statement and define cases that will be compared against it
? Once a matching case is found, the associated code is exectuted and we exit the statement 

! The "break" keyword instructs our code to exit the code block

* Days of the week example
*/

// * Declare our "day" variable to check the value of
let day = "Saturday";






/*
! Switch Statement 
* Grade example
*/

// * Declare our "testScore" variable to check the value of
let testScore = 65;




/*
! Tasks:

? 1: Write a conditional statement to check whether a customer is old enough to be served alchohol at a bar. Check the value of a variable named "age" and log a message to the console asking what the customer would like if they are 18 or older and denying them service otherwise. 

? 2: Write a conditional statement to check whether a number is odd or even and log a message to the console stating whether the number is odd or even.

? 3: Write a conditional statement to check whether a number is divisble by 3 or 5 and log the reuslt to the console.

? 4: Write a conditional statement to check whether a number is divisible by 3 and / or 5. If the number is divisble by 3 log "Fizz" to the console, if the number is divisible by 5 log "Buzz" to the console, if the number is divisible by 3 and 5 log "Fizz Buzz" to the console and if the number is divisible by neither 3 or 5 log the number to the console.
*/

// 1: Age check
// condition ? exprIfTrue : exprIfFalse




// 2:





//3


// 4:

