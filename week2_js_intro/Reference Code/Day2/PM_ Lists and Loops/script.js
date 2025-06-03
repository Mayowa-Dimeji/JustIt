// * Session 4 Outline

/*
TODO: Arrays (Basics, Index, Methods)
TODO: Loops (For, While, Do While, For Of)
*/

/*
! Arrays

* Think of an array as a list.
* An array is a data structure we can use to store an ordered list.

? Arrays are declared in the same that way we declare variables
? However square brackets "[]" follow the assignment operator "="

* EXAMPLE: "let array = []"

? Items in an array are separated by a comma within the square brackets
*/

// * Declaring an array

// * Referencing an array - same as any variable
console.log();

/*
* Array index
! JavaScript starts counting from zero (0)
*/
console.log();

/*
! Arrays
* Coffee Order Example:
*/
let coffeeOrder = [
    "James - Americano",
    "Hannah - Frappuccino",
    "Alex - Latte"
];

// * Log array to the console
console.log();

// * We can also output data in table format - console.table():
console.table();

/*
* If we want to access a specific item in the array
* we can use bracket notation and reference the index [x]
*/
console.log();

// * Using bracket notation we can also edit / update items
coffeeOrder[] = "James - Flat White";

/*
* Referencing an index that is undefined, will return undefined
* However we can also set new items to the index with bracket notation
*/
console.log();
coffeeOrder[] = "New array item";
console.log();

/*
! Arrays
* Properties and Methods
? As seen with other data, arrays have properties and methods we can access
*/

/*
? .length property 
* In the context of an array the .length property represents the number of items
*/
console.log(coffeeOrder);

/*
? .push() method
* Adds a new item to the end of the array
*/
coffeeOrder.push("");
console.log();

/*
? .pop() method
* Removes the last item from the array
*/
coffeeOrder
console.log(coffeeOrder);

/*
! There are numerous array methods, at our disposal that allow
! us to work with, manipulate, sort and filter array data.

* I would recommend taking some time to familiarise yourself
* with the different array methods and what can be acheived
* with them.

? https://www.programiz.com/javascript/library/array
*/

/*
! Loops

* We often need to repeat actions but want to avoid repeating code
* this is where loops come in as they allow us to repeat code
* multiple times.

? Different loops work in different ways
*/

/*
! Loops
* For Loop: Most commonly used loop
? Diagram: https://cdn.programiz.com/sites/tutorial2program/files/javascript-for-loop.png
* Loop over an array example:
*/

let colours = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Black",
    "Purple",
    "Pink",
    "Brown"
];

console.log(colours);

console.log(colours[]);
console.log(colours[]);
console.log(colours[]);
console.log(colours[]);
console.log(colours[]);

/*
* For Loop:

* Rather than individually logging each item we can use a loop

! In order to breakdown the loop lets look at the 3 sections within brackets

? Firstly we are declaring our index - think of this as a loop counter.
? Secondly we are defining the conditions for our loop - loop while x is true.
? Thirdly we are instructing our counter to increase by one after each loop.

* The body of the loop will be executed the necessary / specified number of times.
* In our example, our loop will run once for every item in the array.
*/



/*
* For Loop:
? We can also declare a for loop to run a stated number of times
* Lets write a loop to find every multiple of 2 between 1-20
*/

let multiplesTwo = [];




/*
* While Loop:

! Make sure AUTO-SAVE is OFF

? A While Loop will run continuously while a condtion is true

* Increment example:
*/

let number = 0;



/*
* While Loop:
! Using a While Loop lets make a basic card game

* First to draw a Spade loses:

? The game will automatically run
? Each loop represents a card being drawn from the deck
? We will check the suit of the card
? If the card is a "Spade" game over and the loop will stop running
*/

let cards = ["Diamond", "Spade", "Club", "Heart"];
let currentCard = "";



// do while loop

// checks conditon after the statement has run 
// therefore will always run at least once 
// even if the condition is false

let num = 1




// for of  - iterate through an array or string

// array
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    "Friday"];


    


// for of - string 

// string
const string = 'Hello World';

// using for...of loop



/*
! Tasks:

? 1: Create an array containing 3 of your favourite films. Use an array method of your choice to add 2 more items to your array, then using a loop I would like you to log each item to the console.

? 2: Using a loop, generate 10 random numbers between 1-100 and log them to the console.

? 3: Create a loop that counts backwards from 20 to 0 in the console.

? 4: Generate 5 random numbers between 1-50. For each number generated, check whether it is divisible by 5 or not. Log the result to the console.
*/

// 1:



// 2:



// 3:




// 4:





