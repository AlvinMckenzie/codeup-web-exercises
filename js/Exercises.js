"use strict";


// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];
//
// library.forEach(function (x){
//     console.log(x.readingStatus)
// });



//Warm-up 9/26

//Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// example input: [1,2,3,4,5] expected output: [2,4]


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenNum(x){
    if x == x % 2 === 0
        return x
}

console.log(evenNum(numbers));


//Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
// (edited)

