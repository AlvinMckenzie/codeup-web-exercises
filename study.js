// 1. Write a function, `filterNumbers()` that takes in an array of mixed data
// types and returns an array of only the numbers type in ascencding order.
//
//     Example input: `["fred", true, 5, 3]`
// Example output: `[3, 5]`

let arrOne = ['fred', true, 5, 3]
function firstNumbers(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if( typeof arr[i] === 'number'){
            newArr.unshift(arr[i])
        }
    }
    return newArr.sort
}
console.log(firstNumbers(arrOne));





//
// 1. Write a function, `getOlder()` that takes in array of dog objects and
// increases the value of each object's `age` property by 1.
//
//     Example input:
//
// [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ]
//
//     Example output
//
//         [
//             {
//                 name: "Chompers",
//                 breed: "Pug",
//                 age: 8
//             },
//             {
//                 name: "Freddy",
//                 breed: "Lab",
//                 age: 5
//             },
//             {
//                 name: "Mr. Pig",
//                 breed: "Mastif",
//                 age: 11
//             }
//         ]


function getOlder(arr){
    let sum = 0
    for ( let i = 0; i < arr.length; i++){
        arr[i].age++
    }
    return sum
}


//
// 1. Write a function, `washCars()` that takes in a array of car objects and sets
// the boolean properties of `isDirty` to false.
//
//     Example input:

 let Qq2 = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]

    // Example output

        let Q2 = [
            {
                make: 'Volvo',
                color: 'red',
                year: 1996,
                isDirty: false // changed to false
            },
            {
                make: 'Toyota',
                color: 'black',
                year: 2004,
                isDirty: false // stays the same
            },
            {
                make: 'Ford',
                color: 'white',
                year: 2007,
                isDirty: false // changed to false
            }
        ]


//answer Q2
function washCars(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].isDirty === true){
            arr[i].isDirty = false
        }
    }
    return arr
}

console.log(washCars);


//
// 1. Write a function, `adminList()` that takes in an array of user objects and
// returns a count of all admins based on the `isAdmin` property. Refactor to
// return an array of admin-only user emails. Refactor again to return an array
// of user objects that are admins.
//
//     Example Input:
//
let arrQThree = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
]

//answer to Q3
function adminList(arr){
    let x = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i].isAdmin === true){
            //x is admin is true
            x++
        }
    }
    return x
}

console.log(adminList(arrQThree));


//part 2
function adminListTwo(arr) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++){
        if (arr[i].isAdmin === true){
            newArr.push(arr[i].email)
        }
    }
    return
}

console.log(adminListTwo(adminList()));

//part 3
function adminListThree(arr) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++){
        if (arr[i].isAdmin === true){
            newArr.push(arr[i])
        }
    }
    return newArr
}


// Example Output (before refactor): `2`
//
//     Example Output (after 1st refactor):

            //
            // 'user1@email.com',
        //     // 'user2@email.com'
        // ]

    // Example Output (after 2nd refactor):

let Qq3 = [[
            {
                isAdmin: true,
                email: 'user1@email.com'
            },
            {
                isAdmin: true,
                email: 'user2@email.com'
            }
        ]]

// 1. Create a function, `makeSandwhichObjects()` that takes in two array of
// strings, breads and fillings and returns an array of `sandwhichObjects` that
// contain properties for bread and filling and values correspond to the same
// order of the two passed in arrays. Assume the two array inputs are the same
// length.
//
//     Example Input:
//
// ```js
    var breads  = [
      "white",
      "wheat",
      "rhy",
      "white"
    ];

    var fillings = [
      "pb&j",
      "ham",
      "cheese steak",
      "tuna"
    ];
//


function makeSandwhichObjects(arr1, arr2){
    let newSandwich = [];
    for (let i = 0; i < arr.length; i++){
        newSandwich.push({
            bread: arr1[i],
            filling: arr2[i]
        })
    }
    return newSandwich
}

console.log(makeSandwhichObjects(breads, fillings));

//     ```
//
//     Example Output:
//
// [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]

// Exam practice

/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
 *
 * Examples
 *
 * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
 * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
 * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
 *
 * Notes
 * Ignore tax or additional fees when calculating the total order cost.
 */
function freeShipping(obj) {
    let something = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < something.length; i++) {
        sum += something[i]
    } if (sum > 50) {
        return true;
    } else {
        return false;
    }
}

//not this one
function freeShippingTwo(obj) {
    let arr = [];
    for ( let key in obj) {
        // console.log(obj[key])
        arr.push(obj[key])
    }
    let sum = 0
    for (let i = 0; i < arr.length; i ++) {
        sum += arr[i];
    }
    if (sum > 50) {
        return true
    } else {
        return false
    }
}
// console.log(freeShippingTwo(shoppingListThree));
let shoppingList = {
    shampoo: 5.99,
    rubber_duck: 15.99,
}
console.log(freeShipping(shoppingList));
let shoppingListTwo = {
    flatscreen_tv: 399.99,
}
console.log(freeShipping(shoppingListTwo));
let shoppingListThree = {
    monopoly: 11.99,
    secret_hiller: 35.99,
}
console.log(freeShipping(shoppingListThree));
/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */
let newArr = [
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
]
function getBudget(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].budget
    }
    return sum
}
console.log(getBudget(newArr));
/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */
let address = '8626 Sunny Oaks'
function convertAddressToObject(input) {
    let arr = input.split(" ");
    let obj = {
        streetNumber: arr[0],
        streetName: `${arr[1]} ${arr[2]}`
    }
    return obj
}
console.log(convertAddressToObject(address));
/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */
let yourPets = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]
function totalPets(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].pets
    }
    return sum
}
console.log(totalPets(yourPets));

/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
 *
 * Examples
 *
 * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
 * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
 * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
 *
 * Notes
 * Ignore tax or additional fees when calculating the total order cost.
 */


/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */