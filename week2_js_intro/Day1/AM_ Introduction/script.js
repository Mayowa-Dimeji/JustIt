// * Session 1 Outline

/*
TODO: Intro to JavaScript
TODO: Basic Syntax
TODO: Variables
TODO: Data Types
*/

/* 
! Basic Syntax 

* As our JavaScript file is now linked to our HTML file
* we can write statements to run in our web browser.

? What are Statements - Commands that perform actions.

? Semi-Colons at the end of statements
! Implicit Semi-Colon - Automatic Insertion
* Add semi-colons as best practice to avoid tricky bugs

? Separate lines for statements

? Code Comments
*/



/* 
! The Console

* Our Web Console can be used to log messages and view data. 
* We can also use the Console to debug our code and read errors.

? What is console.log - A method that allows us to log data to the console.


! Semi-Colons ';'

* We must add a semi-colon at the end of our statements.

* JavaScript will automatically insert semi-colons if missed,
* however, as best practice to avoid bugs we should try to end
* all of our statements with them.

* We can write statements one after another on one line.

* Usually statements are separated onto different lines for readability.

*/

console.log("May");


/* 

! Variables

* Variables are a way for us to store data under a label.

! let 

* We declare a Variable with the 'let' keyword followed by
* the assingment operator '='

* As an example we will create a variable named 'greeting'
* and assign it the word "Hello"

! Note that variable names are case sensitive.

*/

let greeting ="Welcome to this page!";
console.log(greeting);


/* 

! Variables

* We can now reference the variable to access the data.

? How would we log the value of the 'greeting' variable to the console.

*/



/* 

! Variables - var

* You may come across the 'var' keyowrd being used to declare
* variables. However, this is an older method. 

! Avoid using 'var' and stick to using 'let'



! Variables - Reassign Values

* Once declared, we can assign new value to 'let' variables.

* To assign a new value to a variable we reference the variable
* name followed by the assignment operator (=) and the new value.

? How would we assign our greeting variable a new value.

*/
console.log(typeof greeting);


/* 

! Note that if you try to assign a new value using 'let' 
! you will encounter an error. 

! Errors will show in the console and indicate which line 
! of your JavaScript code is causing the error.



! Variables - const

* We can declare constant variables with the 'const' keyword.

* The keyword 'const' should be used for variables where the data
* will not change, the value will remain constant. 


*/


/* 


! With 'const' variables the value can not be updated.

* 'const sky = "Green"' or 'sky = "Green"'

! Both examples would cause an error as the value is constant.



! Data Types 

* Values in JavaScript can be different data types.

? Dynamically Typed - Data Types exist but variables arent bound to type

* Our 'greeting' and 'sky' variables are examples of String's.

? String - Surrounded by "Quotes"
! 'Single Quotes'
! "Double Quotes"
! `Backticks`

*/



/* 

! Data Types

? Number
* Number - Integer and Floating Points
! Mathematical Operations 

* BigInt - Represents Integers of arbitrary length 
! Rarely Needed
*Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt


*/



// * We can use Mathematical operators to execute Mathematical operations




// ? Which data type is the following variable?





// ! Anything wrapped in quotes or backticks = String

/* 
! Data Types

* Boolean - True or False
! Evaluate comparisons or conditions
*/




/* 
! Data Types

* Null - Doesn't fall under any specific type
! Forms its own 'null' type
*/



/* 
! Data Types

* Undefined - Value not assigned therefore it is undefined
! Variables declared but not assigned
*/





/* 
! Data Types

* Object and Arrays - Will be touched on in depth later this week

* Symbol - Will be relevant after Objects
*/

/* 
! String Concatenation
*/




/*
! Tasks:

? 1: Create a variable that stores your name, using string concatenation I would like you to construct a string and use an alert to display the greeting to the user e.g. “Hello John”.

? 2: Create additional variables to store your favourite colour and your favourite film or tv series. Using string concatenation construct and log a sentence including your name and these values to the console.

? 3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. I then want you to update the values for the "breakfast", "lunch" and dinner "variables" to what you are eating today and log the new values to the console. 
*/

// 1:
// alert to greet user with string concatenation.
let my_name="Mayowa Oladimeji";
alert("Hello " + my_name +", "+ greeting);



// 2:

let fav_color= "purple";
let fav_show= "Vampire Diaries";
console.log("Hello, my name is " + my_name +". My favourite color is " + fav_color +" and my favorite show is " + fav_show +".");
// 3:


// yesterdays breakfast, lunch and dinner;
let breakfast ="oats";
let lunch ="pasta and chicken";
let dinner ="rice and minced meat sauce"

// yesterdays meals logged to console
console.log("Yesterday, I had " +breakfast+ " for breakfast, "+ lunch +" for lunch and " + dinner + " for dinner.");

// update for today's meals
breakfast="Teas";
lunch="rice and minced meat sauce";
dinner="ice cream and cookies";

console.log("Today, I had " +breakfast+ " for breakfast, and will have "+ lunch +" for lunch and " + dinner + " at dinner time.");