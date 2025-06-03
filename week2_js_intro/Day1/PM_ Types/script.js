// * Session 2 Outline

/*
TODO: Type Conversion
TODO: Interaction
TODO: Properties and Methods
*/

/*
! Type Conversion - String

* Sometimes we are required to convert the type of our data

? String Conversion - automatic  when the string form of a value is needed e.g. alert()
*/

alert(1000);

/*
* As the alert method requires a string value in order to output the data 
* our number of 1000 is automatically converted from a number to a string

! 1000 to "1000"

? We can use String() function - `let example = String(value)`
*/

let oneThousand = String(1000);
console.log(oneThousand);
console.log(1000);

/*
! Type Conversion - Number
? Numeric Conversion - automatically takes place in mathematical functions and expressions
! TIP: Ensure numbers are a number data type before working with the data
*/

console.log("10" / "2");
console.log("10" + "10");

/*
? We can use Number() function - `let example = Number(1000)`
! If string is not a valid number - `NaN` is returned
*/

let numberOne = Number("1");
let numberTwo = Number("Two");

console.log(numberOne, numberTwo);

/*
! Type Conversion - Boolean
? We can use Boolean() function - `console.log(Boolean("hello"))` = true
! empty values = false
* other values = true
*/

console.log(Boolean("value"));
console.log(Boolean(""));

/*
! Type Conversion - Check Type
* We can use "typeof" to check the type of our data.
*/

console.log(typeof 100);
console.log(typeof "String");
console.log(typeof true);


/*
! Interaction 
? alert - Shows the user a modal with a message and waits for users to press "ok".
! The message can be passed to the alert method manually or via a variable.
*/

alert("Hello");

let message = "Hello World!";

alert(message);
/*
! Interaction 
? prompt - Shows the user a modal with a message and an input field, ok and cancel buttons.
*/

let day = prompt("What day is it today?");

console.log("Happy" + " " + day + "!");

// ! Template Literals - More streamlined syntax for working with variable data.
console.log(`Happy ${day}!`);

/*
! Interaction 
? confirm - Shows the user a modal with a question and two buttons, ok and cancel.
! Registers the result as true or false
*/

console.log(window.confirm("Are you sure?"));

/*
! Properties and Methods

? Properties - Information about our data
? Methods - Actions we can complete with our data, whether that be manipulating it or filtering it for example 
*/

// ! Property Example - .length property - Only property of a string
let string = "Hello World";
console.log(string.length);

// ! Method Examples - .toUpperCase / .toLowerCase
console.log(string.toUpperCase());
console.log(string.toLowerCase());

/*
! Tasks:

? 1: Use prompt to take in a users name, using the value I would like you log a message to the console greeting them.

? 2: Use prompt to take in a number, I would like you to multiply that number by 10 and then display an alert containing the result.

? 3: Research the JavaScript "Math" object and utilise the in-built methods to achieve the following:

? - Take a decimal number (e.g. 1.5) and round it to its nearest integer (whole number).
? - Take a decimal number (e.g. 1.5) and round it DOWN to its nearest integer (whole number).
? - Generate a random number between 1 and 10.
*/
// task 1
let user_name = prompt("What is your name?");
String(user_name);
console.log("Hello " +user_name+", Welcome to this page");

// task 2
let user_number= prompt("Give me a number");
Number(user_number);
user_number *=10;
console.log("The result is: " + user_number);

// task 3
let round_number=prompt("Give a decimal number");
Number(round_number)
console.log("The number you entered rounded to the nearest integer is: " + Math.round(round_number));
console.log("The number you entered rounded down to the nearest integer is: " +Math.floor(round_number));
console.log("The randome number generated: " +Math.random());