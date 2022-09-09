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
alert('Great, ' + favoriteColor + ' is my favorite color too.');

// For example, if the user enters "blue", your code should alert a message that says:
//
// "Great, blue is my favorite color too!"
//
// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//


// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.
//(You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?)
let little =  parseInt(prompt("How many days will you rent The little Mermaid?"));
let brother = parseInt(prompt ('How many days will you rent Brother bear?'));
let her = parseInt(prompt ("How many days will you rent Hercules?"));
let price = 3
let total = ((little + brother + her) * price);

alert('Your total will be ' + total  + ' thank you.');


//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let amazonHour = parseInt(prompt("How many hours did you work for Amazon?"));
let faceHour = parseInt(prompt("How many hours did you work for Facebook?"));
let googleHour = parseInt(prompt("How many hours did you work for Google?"));

let amazonPay = 380
let googlePay = 400
let facePay = 350

let totalPay = (amazonPay * amazonHour) + (facePay * faceHour) + (googlePay * googleHour);

alert('Your total pay for the is ' + totalPay + ('.'));

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.


let openSeat = confirm('Is there an opening for the class?');
let conflict = confirm('Does the class conflict with your schedule?');

alert('It is ' + (openSeat || conflict) + (' you can join the class.'));

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let items = confirm('Are you buying more than two items?');
let premium = confirm('Are you a premium member?');
let offer = confirm('Is the offer still valid?');

alert('It is ' + ((offer && items) || (offer && premium)) + ' the discount will aplly.');

// Finally, commit the changes to your git repository, and push to GitHub.