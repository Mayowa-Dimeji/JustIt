// Function to subtract two numbers
function subtract(a, b) {
    // Returns the difference
    return a - b;
}




// Wait for the HTML document to be fully loaded

document.addEventListener("DOMContentLoaded", function() {
    // Get the result of the subtraction
    const result = subtract(100, 5);
    
    // Get the HTML element with the id "result"
    const resultElement = document.getElementById("result");
    
    // Update the text content of the "result" element with the subtraction result
    resultElement.textContent = `The result of the subtraction is: ${result}`;

    let user_input1 = parseInt(prompt("Enter the first number:"));
    let user_input2 = parseInt(prompt("Enter the second number:"));
    
    // 
    // Check if the input is a valid number
    if (isNaN(user_input1) || isNaN(user_input2)) {
        alert("Please enter valid numbers.");
        return; // Stop execution if input is not valid
    }else{
         const user_result = subtract(user_input1, user_input2);
         resultElement.textContent = `The result of the subtraction is: ${user_result}`;
    }
});

// function to promt user input






    
    // Ask the user for two numbers using prompt()

    
    // Convert user input from string to number

    

    // Check if the input is a valid number

    

     // Stop execution if input is not valid
 
     

    // Get the HTML element with id "result"

    

    // Update the text content of the "result" element with the subtraction result

    