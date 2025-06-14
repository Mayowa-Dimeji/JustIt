// * Session 7 Outline

/*
TODO: Object Basics
TODO: Properties and Methods
TODO: 'this' keyword
*/

/*
! Objects

? Properties = data contained within the object
? Methods = things that the object can do

* Objects work with Key:Value pairs.
* Keys are declared without quotes and seperated from values by a colon
* Values can be any data type and are written accordingly
* Pairs are seperated 

*/
// Creating an object with properties 



//  Coffee shop object-

// Defining a coffee shop object with properties
const coffeeShop = {
    name: "Costa",  // Name of the coffee shop
    branchNumber: 250,  // Number of branches
    specialOffers: true,  // Boolean indicating if special offers are available
    drinks: ["Americano", "Latte", "Tea"]  // Array of available drinks
};


// Accessing object properties via Dot Notation
console.log(coffeeShop.name); // Output: Costa

// Accessing object properties via Bracket Notation
console.log(coffeeShop["branchNumber"]); // Output: 250

// Accessing an array inside an object
console.log(coffeeShop.drinks[0]); // Output: Americano

// Adding a new property to an existing object
coffeeShop.muffins = ["Blueberry", "Chocolate"];

console.table(coffeeShop); // Display the object in a table format in the console

// Changing the value of an existing property
coffeeShop["branchNumber"] = 100;
console.log(coffeeShop.branchNumber); // Output: 100

// Adding new offers to the coffeeShop object
coffeeShop.breakfastOffer = "Free bagel with any Coffee!";
coffeeShop.lunchOffer = "Free Coffee with any Sandwich!";
console.log(coffeeShop);


// Task: Review the code snippets below and make your own notes 
// Conditional offer check  

let offer = "no offer"; // Default offer if no conditions are met
let time = 1200; // Represents the current time in 24-hour format

// Checking which offer is available based on the time
if (time < 1100) {
    offer = coffeeShop.breakfastOffer;
    console.log(offer); // Output: Free bagel with any Coffee!
} else if (time < 1500) {
    offer = coffeeShop.lunchOffer;
    console.log(offer); // Output: Free Coffee with any Sandwich!
}

//  Add methods to object  

// Adding an 'open' method to the coffeeShop object
coffeeShop.open = function () {
    return "We are open, come on in!";
};

// Adding a 'close' method to the coffeeShop object
coffeeShop.close = function () {
    return "Sorry, we are closed. Come back tomorrow morning!";
};

// Calling the methods and printing their results
console.log(coffeeShop.open());  // Output: We are open, come on in!
console.log(coffeeShop.close()); // Output: Sorry, we are closed. Come back tomorrow morning!


// ------------------- Alarm clock -------------------

// Creating an alarm object with different alarms for weekdays and weekends
const alarm = {
    weekendAlarm: "Sleep in, it's the weekend!", // Message for weekends
    weekdayAlarm: "Get up at 7:00am.", // Message for weekdays
    checkAlarm: function (day) { // Method to check which alarm to return
        if (day === "Saturday" || day === "Sunday") {
            return this.weekendAlarm;
        } else {
            return this.weekdayAlarm;
        }
    }
};

// Testing the checkAlarm method
console.log(alarm.checkAlarm("Sunday")); // Output: Sleep in, it's the weekend!





// Nested Objects tasks

// Employee object with nested objects for department details
const employee = {
    id: 1,  // Employee ID
    name: "John Doe",  // Employee name
    position: "Software Engineer",  // Job title
    department: {  // Nested department object
        name: "Engineering",  // Department name
        location: "Building A",  // Location of the department
        supervisor: {  // Nested supervisor object
            name: "Jane Smith",  // Supervisor name
            position: "Engineering Manager"  // Supervisor's job title
        }
    }
};


// Task 1 access nested object properties to log the name of John's supervisor to the console.
console.log(employee.department.supervisor.name); // Output: Jane Smith



// Library object with nested book objects 

// Library object containing an array of book objects
const library = {
    name: "Public Library",  // Library name
    location: "City Center",  // Library location
    books: [  // Array of book objects
        {
            id: "B001",  // Book ID
            title: "The Great Gatsby",  // Book title
            author: "F. Scott Fitzgerald",  // Author
            details: {  // Nested details object
                genre: "Fiction",
                year: 1925
            }
        },
        {
            id: "B002",
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            details: {
                genre: "Fiction",
                year: 1960
            }
        }
    ]
};

// Task 2 access nested object properties to log  the title of 'The Great Gatsby' to the console.
console.log(library.books[0].title); // Output: The Great Gatsby
// Task 3 access nested object properties  objects inside the books array to log  the  year of the book title 'To Kill a Mockingbird'
console.log(library.books[1].details.year); // Output: 1960




// ! JavaScript Objects Tasks:

// ? 1: Create an object called ‘person’ with keys of name age and city. Once created log your object to the console.
const person = {
    name: "Alice",
    age: 30,
    city: "New York",

    // greet : function() {
    //     return `Hello, my name is ${name}!`;
    // }
};
console.table(person); // Output: { name: 'Alice', age: 30, city: 'New York' }

// ? 2: Add a method to your ‘person’ object that returns a string greeting the person by name.
person.greet = function() {
    return `Hello, my name is ${this.name}!`;
};
// ? 3: Update the values of your ‘person’ object with dot notation to familiarise yourself with how new values can be set to an object. 
person.age = 31; // Update age
person.city = "Los Angeles"; // Update city 
person.name = "Bob"; // Update name
console.table(person); // Output: { name: 'Bob', age: 31, city: 'Los Angeles' }
console.log(person.greet()); // Output: Hello, my name is Bob!


// TODO: If you manage to complete all of the tasks, have a go at creating your own nested object. See example below to used as a reference



// Nested Object Example
const films = {
    Oppenheimer: {
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama"
    },
    Barbie: {
        title: "Barbie",
        year: 2023,
        genre: "Comedy"
    },
    Dune1: {
        title: "Dune: Part One",
        year: 2021,
        genre: "Sci-Fi"
    }
}

//nested object of me
const my_family = {
    Daddy:{
        role: "Father",
        philosophy: "God first, family second, work third",
        
    },
    Mummy: {
        role: "Mother",
        philosophy: "The blanket of God is wide enough for all",
        
    },
    Titi: {
        role: "Sister", 
        philosophy: "the life you want is on the other side of fear",
        
    },
    Dami:{
        role: "Sister",
        philosophy: "God is a rewarder of those who diligently seek him",
        
    },
    Mayowa: {
        role: "Me/Sister",
        philosophy: "God is the source of my strength",
        
    },
    Abike:{
        role: "Sister",
        philosophy: "God is the source of my strength",
        
    }

}
console.table(my_family); // Display the nested object in a table format in the console

// another nested object of greek gods and godessses
const greekGods = {
    Zeus: {
        title: "King of the Gods",
        domain: "Sky and Thunder",
        symbols: ["Lightning Bolt", "Eagle"]
    },
    Hera: {
        title: "Queen of the Gods",
        domain: "Marriage and Family",
        symbols: ["Peacock", "Cow"]
    },
    Poseidon: {
        title: "God of the Sea",
        domain: "Sea and Earthquakes",
        symbols: ["Trident", "Horse"]
    },
    Athena: {
        title: "Goddess of Wisdom",
        domain: "Wisdom and War Strategy",
        symbols: ["Owl", "Olive Tree"]
    },
    Apollo: {
        title: "God of the Sun",
        domain: "Music, Arts, and Prophecy",
        symbols: ["Lyre", "Laurel Wreath"]
    },
    Artemis: {
        title: "Goddess of the Hunt",
        domain: "Hunt and Wilderness",
        symbols: ["Bow and Arrow", "Deer"]
    },
    Ares: {
        title: "God of War",
        domain: "War and Violence",
        symbols: ["Spear", "Helmet"]
    },
    Aphrodite: {
        title: "Goddess of Love",
        domain: "Love and Beauty",
        symbols: ["Dove", "Rose"]
    },
    Hermes: {
        title: "Messenger of the Gods",
        domain: "Commerce and Thieves",
        symbols: ["Caduceus", "Winged Sandals"]
    }
};
console.table(greekGods); // Display the nested object in a table format in the console