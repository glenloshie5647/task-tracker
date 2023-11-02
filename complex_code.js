/* 
   Filename: complex_code.js 
   Description: This code implements a complex algorithm to generate a customized greeting message based on the user's name and current time.
*/

// Get the user's name
const userName = prompt("Please enter your name: ");

// Get the current date and time
const currentDate = new Date();
const currentHour = currentDate.getHours();

// Define the messages for different time periods
const morningMessage = "Good morning";
const afternoonMessage = "Good afternoon";
const eveningMessage = "Good evening";
const nightMessage = "Good night";

// Define the function to generate the greeting message
function generateGreetingMessage(name, hour) {
    let message;

    if (hour >= 5 && hour < 12) {
        message = `${morningMessage}, ${name}!`;
    } else if (hour >= 12 && hour < 18) {
        message = `${afternoonMessage}, ${name}!`;
    } else if (hour >= 18 && hour < 22) {
        message = `${eveningMessage}, ${name}!`;
    } else {
        message = `${nightMessage}, ${name}!`;
    }

    return message;
}

// Call the function and display the greeting message
const greetingMessage = generateGreetingMessage(userName, currentHour);
console.log(greetingMessage);