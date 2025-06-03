//1.  Create the id's as shown below in your index.html
// inside the <section id="home"> element, after the static <h1>Home</h1>,
//  since that’s the best place for now to show dynamic welcome messages when users land on your site.
 
/* <h1 id="greeting">Welcome to my portfolio</h1>
<p id="dayMessage"></p>
<p id="aboutMe"></p> */
 
 
// 2. Link JavaScript to HTML
// Inside index.html, link your JS like this:
// Place this before the closing </body> tag so the elements are already loaded:
 
// 3. Using JavaScript to Access and Modify HTML
// 1. Change the greeting text
let name = prompt("What's your name?");
document.getElementById("greeting").textContent = `Welcome, ${name}, to my portfolio!`;
 
// 2. Add a message based on the day
let day = prompt("What day is it today?");
document.getElementById("dayMessage").textContent = `Happy ${day.toUpperCase()}!`;
 
// 3. Display an About Me message
let about = "I love to build websites!";
document.getElementById("aboutMe").textContent = `${about.toUpperCase()} (Length: ${about.length} characters)`;