'use strict'


//Create a file named break_and_continue.js in the js directory.


// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

let oddNum = 0

do {
    oddNum = prompt('Enter an odd number between 1 and 50:')
    if ((oddNum % 2 == 1 && 1<= oddNum && oddNum <= 50) || !oddNum){
        break;
    }
}while (true)

if (oddNum){


console.log('Number to skip is: ' + oddNum)
console.log()

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

for (let i = 1; i < 50; i+=2) {
    if (i == oddNum){
        console.log('Yikes! Skipping number: ' + i)
        continue
    }

    console.log('Her is an odd number: ' + i)
}}
