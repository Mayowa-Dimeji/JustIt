// script.js

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}   


// Wait for the HTML document to be fully loaded before running the script

document.addEventListener("DOMContentLoaded", function() {
    // Get the result of the subtraction
    const result = subtract(100, 5);
    
    // Get the HTML element with the id "result"
    const resultElement = document.getElementById("result");
    
    // Update the text content of the "result" element with the subtraction result
    resultElement.textContent = `The result of the subtraction is: ${result}`;
});
    
    // Get the HTML element with the id "result"

    

    // Update the text content of the "result" element with the subtraction result

    