"use strict"



//Exercises
//
// For this lesson, perform the following tasks:
//
// Create two new HTML files, inline_js, and external_js.


// Create a folder named js in the same location as the HTML files you created.


// Inside the js folder, create a file named external.js.


// Use the sample code from this lesson to fill in the HTML files with the appropriate code.


// Add a console.log message in inline_js.html that says "Hello from inline JavaScript".


// Add a console.log message in external.js that says "Hello from external JavaScript".


// Open the HTML files and view the JavaScript Console to make sure you see your messages.




// Congrats! You now know how to embed JavaScript in a web page. Now let's practice some user interaction. Do all of the following work inside of the external.js file.
//
// Use the alert function to show a message that says 'Welcome to my Website!'.
//
alert("Welcome to my website");

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//

let favoriteColor = prompt('what is your favorite color');
alert('Great, ' + favoriteColor + ' is my favorite color too.')

// For example, if the user enters "blue", your code should alert a message that says:
//
// "Great, blue is my favorite color too!"
//
// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//


// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.
//(You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?)
let little =  parseInt(prompt("How many days will you rent LM?"));
let brother = parseInt(prompt ('How many days will you rent Brother bear?'));
let her = parseInt(prompt ("How many days will you rent Hercules?"));
let price = 3
let total = ((little + brother + her) * price)

alert('Your total will be ' + total  + ' thank you.')

// Finally, commit the changes to your git repository, and push to GitHub.